import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT } from '../config/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginDto, LoginReponse } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authTokenKey = 'authTokenKey';

  constructor(
    @Inject(API_ENDPOINT) private apiEndpoint: string,
    private http: HttpClient
  ) {}

  login(data: LoginDto): Observable<LoginReponse> {
    return this.http
      .post<LoginReponse>(`${this.apiEndpoint}/auth/login`, data)
      .pipe(tap(({ accessToken }) => this.saveAuthToken(accessToken)));
  }

  saveAuthToken(token: string) {
    localStorage.setItem(this.authTokenKey, token);
  }
}
