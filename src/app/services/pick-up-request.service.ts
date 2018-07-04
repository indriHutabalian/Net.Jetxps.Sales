import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import {
  ApiResponseQuery,
  PageQuery
} from '../models';


@Injectable({
  providedIn: 'root'
})
export class PickUpRequestService {

  constructor(
    private httpClient: HttpClient
  ) { }
}
