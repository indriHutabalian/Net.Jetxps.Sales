import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  EngagementProductType
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EngagementProductTypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(pageQuery: any): Observable<ApiResponseQuery<EngagementProductType>> {
    return this.httpClient.get<ApiResponseQuery<EngagementProductType>>(`${environment.apiUrl}/v1/engagement-product-types`, { params: pageQuery });    
  }
}
