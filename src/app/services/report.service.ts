import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { VMReportSRS, ApiResponseQuery, EngagementRunsheetItem, VMReportTotalJetId, VMReportJetIdRevenue } from '../models';
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

  getSalesEngagementSummary(filter)
    : Observable<ApiResponseQuery<VMReportSRS>> {
    return this.httpClient.post<ApiResponseQuery<VMReportSRS>>(`${environment.apiUrl}/v1/sales/sales-engagement-summary`, filter);
  }

  getSalesEngagementDetail(filter, isPOE: boolean)
    : Observable<ApiResponseQuery<EngagementRunsheetItem>> {
    return this.httpClient.post<ApiResponseQuery<EngagementRunsheetItem>>(`${environment.apiUrl}/v1/sales/sales-engagement-detail?isPOE=${isPOE}`, filter);
  }

  getTotalManagedJetIds(pageQuery: any, startDate: Date, endDate: Date, managedBy?: string)
    : Observable<ApiResponseQuery<VMReportTotalJetId>> {
    return this.httpClient.get<ApiResponseQuery<VMReportTotalJetId>>(`${environment.apiUrl}/v1/sales/total-managed-jet-ids?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&managedBy=${managedBy || ''}`, { params: pageQuery });
  }

  getManagedJetIds(pageQuery: any, startDate: Date, endDate: Date, managedBy?: string, branchCode?: string)
    : Observable<ApiResponseQuery<Account>> {
    return this.httpClient.get<ApiResponseQuery<Account>>(`${environment.apiUrl}/v1/sales/managed-jet-ids?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&managedBy=${managedBy}&branchCode=${branchCode || ''}`, { params: pageQuery });
  }

  getRevenueJetIds(pageQuery: any, startDate: Date, endDate: Date, managedBy?: string)
    : Observable<ApiResponseQuery<VMReportJetIdRevenue>> {
    return this.httpClient.get<ApiResponseQuery<VMReportJetIdRevenue>>(`${environment.apiUrl}/v1/sales/jet-ids-revenue?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&managedBy=${managedBy || ''}`, { params: pageQuery });
  }

  exportManagedJetIds(startDate: Date, endDate: Date) {
    return this.httpClient.post(`${environment.apiUrl}/v1/sales/managed-jet-ids/excel?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
        , {}
        , { responseType: "arraybuffer" })
      .toPromise();
  }

  exportRevenueJetIds(startDate: Date, endDate: Date) {
    return this.httpClient.post(`${environment.apiUrl}/v1/sales/jet-ids-revenue/excel?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
        , {}
        , { responseType: "arraybuffer" })
      .toPromise();
  }
}
