import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginResponse, LoginFormData } from './auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public basePath: string = environment.authEndpoint;
  constructor(private http: HttpClient) {}

  public loginUser(data: LoginFormData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.basePath}/login`, {
      username: data.username,
      password: data.password,
      redirect: '/dashboard'
    });
  }

  public renewToken(token: String): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get<LoginResponse>(`${this.basePath}/renew`, { headers });
  }
}
