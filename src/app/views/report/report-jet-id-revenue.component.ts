import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReportService } from '../../services';
import { saveAs } from "file-saver";
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { PageQuery, VMReportJetIdRevenue } from '../../models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-report-jet-id-revenue',
  templateUrl: './report-jet-id-revenue.component.html',
  styleUrls: ['./report-jet-id-revenue.component.scss']
})
export class ReportJetIdRevenueComponent implements OnInit {

  constructor(
    private bsModalService: BsModalService,
    private reportService: ReportService,
    private toastrService: ToastrService
  ) { }

  public loading: boolean = false;
  public loadingExport: boolean = false;


  public months: string[] = moment.months();
  public years: number[] = [];
  public selectedMonth: number;
  public selectedYear: number;

  public items: VMReportJetIdRevenue[] = [];
  public pageQuery: PageQuery = new PageQuery();

  ngOnInit() {
    let current = moment();
    this.selectedMonth = current.month();
    this.selectedYear = current.year();

    for (let i = this.selectedYear - 5; i <= this.selectedYear; i++) {
      this.years.push(i);
    }
  }

  getItems(pageQuery: PageQuery, month: number, year: number) {
    let dateRange = this.getDateRange(month, year);

    this.loading = true;

    this.reportService.getRevenueJetIds(pageQuery, dateRange[0], dateRange[1])
      .subscribe(data => {
        this.loading = false;
        this.items = data.result;

        if (this.items.length == 0) {
          this.toastrService.warning('No Data');

          return;
        }

        this.pageQuery = data.query;
      }, res => {
        this.loading = false;
        let error = res.error;
        this.toastrService.error(error.message);
      });
  }

  pageChanged(event: any) {
    this.pageQuery.page = event.page;

    this.getItems(this.pageQuery, this.selectedMonth, this.selectedYear);
  }

  search() {
    this.pageQuery.page = 1;

    this.items = [];

    this.getItems(this.pageQuery, this.selectedMonth, this.selectedYear);
  }

  getDateRange(month: number, year: number): any[] {
    return [
      moment().set({ date: 1, month: month, year: year, hour: 0, minute: 0, second: 0, millisecond: 0 }),
      moment().set({ date: 1, month: month, year: year, hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'month').add(-1, 'second')
    ];
  }

  exportRevenueJetIds(month: number, year: number) {
    let dateRange = this.getDateRange(month, year);

    this.loadingExport = true;

    this.reportService.exportRevenueJetIds(dateRange[0], dateRange[1])
      .then(res => {
        this.loadingExport = false;
        let blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, `JetIdRevenue:${moment(dateRange[0]).format('MM/DD/YYYY')}-${moment(dateRange[1]).format('MM/DD/YYYY')}`);
      }, res => {
        this.loadingExport = false;
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }
}
