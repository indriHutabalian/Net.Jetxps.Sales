import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  EngagementSellingType
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EngagementSellingTypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(pageQuery: any): Observable<ApiResponseQuery<EngagementSellingType>> {
    return this.httpClient.get<ApiResponseQuery<EngagementSellingType>>(`${environment.apiUrl}/v1/engagement-selling-types`, { params: pageQuery });    
  }
}
