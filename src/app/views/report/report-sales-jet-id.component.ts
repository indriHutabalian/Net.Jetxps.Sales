import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-sales-jet-id',
  templateUrl: './report-sales-jet-id.component.html',
  styleUrls: ['./report-sales-jet-id.component.scss']
})
export class ReportSalesJetIdComponent implements OnInit {

  constructor() { }

  dateRange: Date[];

  ngOnInit() {
  }

  download(dateRange: Date[]) {
    let startDate = new Date
    window.open(`http://localhost:50663/v1/sales/reports/sales-jet-id?startDate=${dateRange[0]}&endDate=${dateRange[1]}}`);
  }

}
