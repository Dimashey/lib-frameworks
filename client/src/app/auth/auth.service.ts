import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {
  LoginDto,
  LoginReponse,
  SignUpDto,
  SignUpResponse,
} from './auth.types';
import { User } from 'models/user.model';
import { API_ENDPOINT } from 'config/environment';

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

  signUp(data: SignUpDto): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(
      `${this.apiEndpoint}/auth/sign-up`,
      data
    );
  }

  getMe(): Observable<User> {
    return this.http.get<User>(`${this.apiEndpoint}/auth/me`);
  }

  saveAuthToken(token: string) {
    localStorage.setItem(this.authTokenKey, token);
  }

  getAuthToken() {
    return localStorage.getItem(this.authTokenKey);
  }
}
