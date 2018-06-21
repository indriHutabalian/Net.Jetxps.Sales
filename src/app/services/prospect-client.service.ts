import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  // ApiResponse,
  ApiResponseQuery,
  PageQuery,
  ProspectClient,
} from '../models';

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

  get(code: string): Observable<ProspectClient> {
    return this.httpClient.get<ProspectClient>(`${environment.apiUrl}/v1/prospect-clients/${code}`);
  }

  create(data: ProspectClient): Observable<ProspectClient> {
    return this.httpClient.post<ProspectClient>(`${environment.apiUrl}/v1/prospect-clients`, data);
  }

  update(code: string, data: ProspectClient): Observable<ProspectClient> {
    return this.httpClient.put<ProspectClient>(`${environment.apiUrl}/v1/prospect-clients/${code}`, data);
  }

  delete(code: string) {
    return this.httpClient.delete<ProspectClient>(`${environment.apiUrl}/v1/prospect-clients/${code}`);
  }

  setOpen(code: string): Observable<ProspectClient> {
    return this.httpClient.post<ProspectClient>(`${environment.apiUrl}/v1/prospect-clients/${code}/open`, {});
  }

  setClose(code: string): Observable<ProspectClient> {
    return this.httpClient.post<ProspectClient>(`${environment.apiUrl}/v1/prospect-clients/${code}/close`, {});
  }
}