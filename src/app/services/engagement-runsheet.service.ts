import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  EngagementRunsheet,
  EngagementRunsheetItem,
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EngagementRunsheetService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(branchCode: string, pageQuery: any): Observable<ApiResponseQuery<EngagementRunsheet>> {
    return this.httpClient
      .get<ApiResponseQuery<EngagementRunsheet>>(
        `${environment.apiUrl}/v1/engagement-runsheets?branchCode=${branchCode}`,
        { params: pageQuery });
  }

  get(code: string): Observable<EngagementRunsheet> {
    debugger
    return this.httpClient
      .get<EngagementRunsheet>(
        `${environment.apiUrl}/v1/engagement-runsheets/${code}`);
  }

  create(data: EngagementRunsheet): Observable<EngagementRunsheet> {
    return this.httpClient.post<EngagementRunsheet>(
      `${environment.apiUrl}/v1/engagement-runsheets`,
      data);
  }

}
