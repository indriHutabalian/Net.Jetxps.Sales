import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import { environment } from '../../environments/environment';
import {
  Account
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public getProfileByEmail(username: string): Promise<Account> {
    return this.httpClient.get<Account>(`${environment.apiUrl}/v1/accounts/profile?username=${username}`)
      .toPromise();
  }

  public getSalesProfileByEmail(username: string) {
    return this.httpClient.get<Account>(`${environment.apiUrl}/v1/accounts/profile/sales?username=${username}`)
      .toPromise();
  }
}
