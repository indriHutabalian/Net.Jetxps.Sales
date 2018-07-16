import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { VMReportSRS, ApiResponseQuery, EngagementRunsheetItem } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private httpClient: HttpClient
  ) { }

  exportSalesJetIdReport(startDate: Date, endDate: Date) {
    let startDateString = moment(startDate).format('MM/DD/YYYY');
    let endDateString = moment(endDate).format('MM/DD/YYYY');

    return this.httpClient.post(`${environment.apiUrl}/v1/sales/reports/sales-jet-id?startDate=${startDateString}&endDate=${endDateString}`
      , {

      }
      , {
        responseType: "arraybuffer"
      }).toPromise();
  }

  getSalesEngagementSummary(filter): Observable<ApiResponseQuery<VMReportSRS>> {
    return this.httpClient.post<ApiResponseQuery<VMReportSRS>>(`${environment.apiUrl}/v1/sales/sales-engagement-summary`, filter);
  }

  getSalesEngagementDetail(filter, isPOE: boolean): Observable<ApiResponseQuery<EngagementRunsheetItem>> {
    return this.httpClient.post<ApiResponseQuery<EngagementRunsheetItem>>(`${environment.apiUrl}/v1/sales/sales-engagement-detail?isPOE=${isPOE}`, filter);
  }
}
