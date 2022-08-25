import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  logIn(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.baseUrl}/Login`, {email, password});
  }
}
