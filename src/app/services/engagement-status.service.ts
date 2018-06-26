import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  EngagementStatus
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EngagementStatusService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(pageQuery: any): Observable<ApiResponseQuery<EngagementStatus>> {
    return this.httpClient.get<ApiResponseQuery<EngagementStatus>>(`${environment.apiUrl}/v1/engagement-statuses`, { params: pageQuery });    
  }
}
