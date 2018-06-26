import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  EngagementServiceType
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EngagementServiceTypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(pageQuery: any): Observable<ApiResponseQuery<EngagementServiceType>> {
    return this.httpClient.get<ApiResponseQuery<EngagementServiceType>>(`${environment.apiUrl}/v1/engagement-service-types`, { params: pageQuery });    
  }
}
