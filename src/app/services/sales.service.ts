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
export class SalesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getActiveEngagementRunsheetItems(pageQuery: any): Observable<ApiResponseQuery<EngagementRunsheetItem>> {
    return this.httpClient
      .get<ApiResponseQuery<EngagementRunsheetItem>>(
        `${environment.apiUrl}/v1/sales/engagement-runsheet-items/active`,
        { params: pageQuery });
  }
}
