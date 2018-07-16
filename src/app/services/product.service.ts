import { Injectable } from '@angular/core';
import { ApiResponseQuery, Product } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(pageQuery: any): Observable<ApiResponseQuery<Product>> {
    return this.httpClient.get<ApiResponseQuery<Product>>(`${environment.apiUrl}/v1/products`, { params: pageQuery });
  }
}