import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient
  ) { }


  login(user) {
    return this.httpClient.post<Observable<any>>(`${environment.apiAuthUrl}/oauth/token`,
      `username=${user.username}&password=${user.password}&grant_type=password&client_id=arc`,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
      .pipe(
        map(data => {
          localStorage.setItem('currentUser', JSON.stringify(data));

          return data;
        })
      );
  }
}
