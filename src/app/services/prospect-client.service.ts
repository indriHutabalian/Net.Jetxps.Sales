import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  ApiResponse,
  ApiResponseQuery,
  PageQuery,
  ProspectClient,
} from '../models';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProspectClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(pageQuery: any): Observable<ApiResponseQuery<ProspectClient>> {
    return this.httpClient.get<ApiResponseQuery<ProspectClient>>(`${environment.apiUrl}/v1/prospect-clients?branchCode=TGR`, { params: pageQuery });
  }

  get(code: string): Observable<ApiResponse<ProspectClient>>{
    return this.httpClient.get<ApiResponse<ProspectClient>>(`${environment.apiUrl}/v1/prospect-clients/${code}`);
  }
}