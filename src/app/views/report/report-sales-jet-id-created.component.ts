import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReportService } from '../../services';
import { saveAs } from "file-saver";
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { PageQuery, VMReportTotalJetId } from '../../models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-report-sales-jet-id-created',
  templateUrl: './report-sales-jet-id-created.component.html',
  styleUrls: ['./report-sales-jet-id-created.component.scss']
})
export class ReportSalesJetIdCreatedComponent implements OnInit {

  constructor(
    private bsModalService: BsModalService,
    private reportService: ReportService,
    private toastrService: ToastrService
  ) { }
  private bsModalRef: BsModalRef;

  public loading: boolean = false;
  public loadingAccount: boolean = false;
  public loadingExport: boolean = false;

  public months: string[] = moment.months();
  public years: number[] = [];
  public selectedMonth: number;
  public selectedYear: number;

  public selectedSales: string;
  public selectedBranch: string;

  public items: VMReportTotalJetId[] = [];
  public pageQuery: PageQuery = new PageQuery();

  public accounts: Account[];
  public accountPageQuery: PageQuery = new PageQuery();
  

  ngOnInit() {
    let current = moment();
    this.selectedMonth = current.month();
    this.selectedYear = current.year();

    for (let i = this.selectedYear - 5; i <= this.selectedYear; i++) {
      this.years.push(i);
    }

    this.pageQuery.orderBy = 'Username';
    this.accountPageQuery.orderBy = 'Username';
  }

  getTotalManagedJetIds(pageQuery: PageQuery, month: number, year: number) {
    let dateRange = this.getDateRange(month, year);

    this.loading = true;

    this.reportService.getTotalManagedJetIds(pageQuery, dateRange[0], dateRange[1])
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

  search() {
    this.pageQuery.page = 1;

    this.items = [];

    this.getTotalManagedJetIds(this.pageQuery, this.selectedMonth, this.selectedYear);
  }

  pageChanged(event: any) {
    this.pageQuery.page = event.page;

    this.getTotalManagedJetIds(this.pageQuery, this.selectedMonth, this.selectedYear);
  }

  exportSalesJetIdCreatedReport(month: number, year: number) {
    let dateRange = this.getDateRange(month, year);

    this.loadingExport = true;

    this.reportService.exportManagedJetIds(dateRange[0], dateRange[1])
      .then(res => {
        this.loadingExport = false;
        let blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, `ManagedJetId:${moment(dateRange[0]).format('MM/DD/YYYY')}-${moment(dateRange[1]).format('MM/DD/YYYY')}`);
      }, res => {
        this.loadingExport = false;
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }

  getManagedJetIds(pageQuery: PageQuery, month: number, year: number, managedBy: string, branchCode: string) {
    let dateRange = this.getDateRange(month, year);

    this.loadingAccount = true;

    this.reportService.getManagedJetIds(pageQuery, dateRange[0], dateRange[1], managedBy, branchCode)
      .subscribe(data => {
        this.loadingAccount = false;

        this.accounts = data.result;
        this.accountPageQuery = data.query;
      }, res => {
        this.loadingAccount = false;
        let error = res.error;
        this.toastrService.error(error.message);
      });
  }

  getDateRange(month: number, year: number): any[] {
    return [
      moment().set({ date: 1, month: month, year: year, hour: 0, minute: 0, second: 0, millisecond: 0 }),
      moment().set({ date: 1, month: month, year: year, hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'month').add(-1, 'second')
    ];
  }

  openModalAccounts(template: TemplateRef<any>, pageQuery: PageQuery, month: number, year: number, item: VMReportTotalJetId) {
    this.selectedSales = item.managedBy;
    this.selectedBranch = item.branchCode;
    
    this.bsModalRef = this.bsModalService.show(template);

    pageQuery.page = 1;
    this.accounts = [];

    this.getManagedJetIds(pageQuery, month, year, this.selectedSales, this.selectedBranch);
  }

  accountPageChanged(event: any) {
    this.accountPageQuery.page = event.page;

    this.getManagedJetIds(this.accountPageQuery, this.selectedMonth, this.selectedYear, this.selectedSales, this.selectedBranch);
  }

}
