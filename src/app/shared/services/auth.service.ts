import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public basePath: string = environment.authEndpoint;
  constructor(private http: HttpClient) {}

  public loginUser(): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.basePath}/login`, {
      username: 'tfilipovici',
      password: 'password',
      redirect: '/dashboard'
    });
  }
}

type LoginResponse = SuccessLoginResponse | FailureLoginResponse;

interface SuccessLoginResponse {
  token: string;
  redirect: string;
}
interface FailureLoginResponse {
  error: string;
}
