import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services';

@Component({
  selector: 'app-report-sales-jet-id',
  templateUrl: './report-sales-jet-id.component.html',
  styleUrls: ['./report-sales-jet-id.component.scss']
})
export class ReportSalesJetIdComponent implements OnInit {

  constructor(
    private reportService: ReportService
  ) { }

  public loading: boolean = false;
  public dateRange: Date[] = [];

  ngOnInit() {
    this.dateRange[0] = this.dateRange[1] = new Date();
  }

  exportSalesJetIdReport(dateRange: Date[]) {
    this.loading = true;
    this.reportService.exportSalesJetIdReport(dateRange[0], dateRange[1])
      .subscribe(res => {
        this.loading = false;
        this.downloadFile(res);
      }, res => {
        this.loading = false;
        debugger
      });

  }

  downloadFile(res: any) {
    debugger
    let blob = new Blob([res], { type: '' });
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}
