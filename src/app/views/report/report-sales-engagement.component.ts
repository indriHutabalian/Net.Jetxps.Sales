import { Component, OnInit } from '@angular/core';
import { BranchService, ReportService } from '../../services';
import { Branch, VMReportSRS } from '../../models';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ReportSalesEngagementDetailModalComponent } from './report-sales-engagement-detail-modal.component';

@Component({
  selector: 'app-report-sales-engagement',
  templateUrl: './report-sales-engagement.component.html',
  styleUrls: ['./report-sales-engagement.component.scss']
})
export class ReportSalesEngagementComponent implements OnInit {

  constructor(
    private branchService: BranchService,
    private reportService: ReportService,
    private toastrService: ToastrService,
    private bsModalService: BsModalService
  ) { }

  public loading: boolean = false;

  public dateRange: Date[] = [new Date(), new Date()];

  public dates: string[] = [];

  public filter: any = {
    startDate: new Date(),
    endDate: new Date(),
    branchCode: ``,
    salesEmail: ``,
    roleType: ``
  };

  public branches: Branch[] = [];
  public items: any = [];

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.branchService.getAll({ size: -1 })
      .subscribe(res => {
        this.branches = res.result.filter(t => !t.isMitra);
      });
  }

  getDatesFromRange(start, end) {
    let dates = [];
    while (start <= end) {
      dates.push(moment(start).format('DD-MMM-YYYY'));
      start = moment(start).add(1, 'day');
    }

    return dates;
  }

  search(filter) {
    this.loading = true;

    this.items = [];
    this.dates = [];

    filter.startDate = moment(this.dateRange[0]).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).utc();
    filter.endDate = moment(this.dateRange[1]).set({ hour: 23, minute: 59, second: 59, millisecond: 0 }).utc();

    this.reportService.getSalesEngagementSummary(filter)
      .subscribe(res => {
        this.loading = false;

        let result: VMReportSRS[] = [];

        result = res.result;

        if (result.length == 0) {
          this.toastrService.warning(`No Data`);

          return;
        }

        // convert
        result.map(item => {
          item.salesName = item.salesName.toLowerCase(),
            item.dateDisplayed = moment(item.date).format('DD-MMM-YYYY');
        });

        // sort alphabetically by name
        result.sort((a, b) => {
          if (a.salesName < b.salesName)
            return -1;
          if (a.salesName > b.salesName)
            return 1;
          return 0;
        });

        let salesCodes: string[] = [];

        result.forEach(item => {
          if (!salesCodes.find(t => t == item.salesCode))
            salesCodes.push(item.salesCode);
        });

        this.dates = this.getDatesFromRange(this.dateRange[0], this.dateRange[1]);

        salesCodes.forEach(salesCode => {
          let values = result.filter(t => t.salesCode == salesCode);

          let item = {
            salesCode: salesCode,
            salesName: values[0].salesName,
            totalPOE: values.reduce((a, b) => a + b.alreadyPOECount, 0),
            totalNotPOE: values.reduce((a, b) => a + b.notPOEYetCount, 0),
            values: []
          };

          this.dates.forEach(date => {
            let alreadyPOECount = 0;
            let notPOEYetCount = 0;

            let valueFound = values.find(t => t.dateDisplayed == date);

            if (valueFound) {
              alreadyPOECount = valueFound.alreadyPOECount;
              notPOEYetCount = valueFound.notPOEYetCount;
            }

            item.values.push({
              dateDisplayed: date,
              alreadyPOECount: alreadyPOECount,
              notPOEYetCount: notPOEYetCount
            });
          });

          this.items.push(item);

        });
      }, res => {
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }

  public bsModalRef: BsModalRef;

  openDetail(salesName, date, isPOE) {
    this.bsModalRef = this.bsModalService.show(ReportSalesEngagementDetailModalComponent, {
      class: 'modal-lg',
      initialState: {
        salesEmail: salesName,
        startDate: moment(new Date(date)).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).utc(),
        endDate: moment(new Date(date)).set({ hour: 23, minute: 59, second: 59, millisecond: 0 }).utc(),
        isPOE: isPOE
      }
    });
  }

}