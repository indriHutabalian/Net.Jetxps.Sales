import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import {
  ApiResponseQuery,
  PageQuery,
  PickUpOrder
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PickUpOrderService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllOpen(branchCode: string, pageQuery: any): Observable<ApiResponseQuery<PickUpOrder>> {
    return this.httpClient
      .get<ApiResponseQuery<PickUpOrder>>(
        `${environment.apiUrl}/v2/pick-up-orders/open?branchCode=${branchCode}`,
        { params: pageQuery });
  }

  getAllHistory(branchCode: string, pageQuery: any): Observable<ApiResponseQuery<PickUpOrder>> {
    return this.httpClient
      .get<ApiResponseQuery<PickUpOrder>>(
        `${environment.apiUrl}/v2/pick-up-orders/history?branchCode=${branchCode}`,
        { params: pageQuery });
  }

  get(code: string): Observable<PickUpOrder> {
    return this.httpClient
      .get<PickUpOrder>(
        `${environment.apiUrl}/v2/pick-up-orders/${code}`);
  }

  create(data: PickUpOrder): Observable<PickUpOrder> {
    return this.httpClient.post<PickUpOrder>(
      `${environment.apiUrl}/v2/pick-up-orders`,
      data);
  }
}
