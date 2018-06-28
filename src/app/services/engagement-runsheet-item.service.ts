import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  EngagementRunsheetItem,
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EngagementRunsheetItemService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(engagementRunsheetCode: string, prospectClientCode: string): Observable<EngagementRunsheetItem> {
    return this.httpClient
      .get<EngagementRunsheetItem>(`${environment.apiUrl}/v1/engagement-runsheets/${engagementRunsheetCode}/engagement-runsheet-items/${prospectClientCode}`);
  }

  realization(data: EngagementRunsheetItem): Observable<EngagementRunsheetItem> {
    return this.httpClient
      .post<EngagementRunsheetItem>(
        `${environment.apiUrl}/v1/engagement-runsheets/realization`,
        data);
  }
}
