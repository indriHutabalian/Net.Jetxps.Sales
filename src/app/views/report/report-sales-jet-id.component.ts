import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services';
import { saveAs } from "file-saver";
import { ToastrService } from '../../../../node_modules/ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-report-sales-jet-id',
  templateUrl: './report-sales-jet-id.component.html',
  styleUrls: ['./report-sales-jet-id.component.scss']
})
export class ReportSalesJetIdComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private toastrService: ToastrService
  ) { }

  public loading: boolean = false;
  public dateRange: Date[] = [];

  ngOnInit() {
    this.dateRange[0] = this.dateRange[1] = new Date();
  }

  exportSalesJetIdReport(dateRange: Date[]) {
    this.loading = true;

    this.reportService.exportSalesJetIdReport(dateRange[0], dateRange[1])
      .then(res => {
        this.loading = false;
        let blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, `SalesJetIdReport:${moment(dateRange[0]).format('MM/DD/YYYY')}-${moment(dateRange[1]).format('MM/DD/YYYY')}`);
      }, res => {
        this.loading = false;
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }
}
