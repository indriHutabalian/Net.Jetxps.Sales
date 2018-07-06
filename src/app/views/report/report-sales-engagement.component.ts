import { Component, OnInit } from '@angular/core';
import { BranchService, ReportService } from '../../services';
import { Branch, VMReportSRS } from '../../models';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-report-sales-engagement',
  templateUrl: './report-sales-engagement.component.html',
  styleUrls: ['./report-sales-engagement.component.scss']
})
export class ReportSalesEngagementComponent implements OnInit {

  constructor(
    private branchService: BranchService,
    private reportService: ReportService,
    private toastrService: ToastrService
  ) { }

  public loading: boolean = false;

  public dateRange: Date[] = [new Date(), new Date()];

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
        this.branches = res.result;
      });
  }


  search(filter) {
    this.loading = true;

    filter.startDate = this.dateRange[0];
    filter.endDate = this.dateRange[1];

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
            item.dateDisplayed = moment(item.date).format('DD/MM/YYYY');
        });

        // sort alphabetically by name
        result.sort((a, b) => {
          if (a.salesName < b.salesName)
            return -1;
          if (a.salesName > b.salesName)
            return 1;
          return 0;
        });

        let salesNames:string[] = [];

        result.forEach(item => {
          if (!salesNames.find(t => t == item.salesName))
            salesNames.push(item.salesName);
        });

        salesNames.forEach(salesName => {
          this.items.push({
            salesName: salesName,
            values: result.filter(t => t.salesName == salesName)
          });
        });
      }, res => {
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }

}
