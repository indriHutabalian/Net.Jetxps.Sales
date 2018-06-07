import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { AuthToken, UserProfile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public isAuthenticated() {
    let accessToken: AuthToken = this.getCurrentAccessToken();
    let userProfile: UserProfile = this.getCurrentUserProfile();
    
    return (accessToken && userProfile);
  }

  private setAccessToken(val) {
    localStorage.setItem('accessToken', JSON.stringify(val));
  }

  public getCurrentAccessToken(): AuthToken {
    return JSON.parse(localStorage.getItem('accessToken'));
  }

  private setUserProfile(val) {
    localStorage.setItem('userProfile', JSON.stringify(val));
  }

  public getCurrentUserProfile(): UserProfile {
    return JSON.parse(localStorage.getItem('userProfile'));
  }

  public login(user): Promise<AuthToken> {
    return this.httpClient.post<AuthToken>(`${environment.apiAuthUrl}/oauth/token`,
      `username=${user.username}&password=${user.password}&grant_type=password&client_id=arc`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
      .pipe(
        tap(data => {
          // add token
          this.setAccessToken(data);

          return data;
        })
      )
      .toPromise();
  }

  public getProfile(): Promise<UserProfile> {
    return this.httpClient.get<UserProfile>(`${environment.apiAuthUrl}/me/profile`)
      .pipe(
        tap(data => {
          this.setUserProfile(data);

          return data;
        })
      )
      .toPromise();
  }

  public logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userProfile');
  }
}
