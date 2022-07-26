import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  logIn(email: string, password: string): Observable<any> {
    const url = `http://localhost:3000/Login`;
    //return this.http.post<Response>(url, {email, password});
    return this.http.get<Response>(url);
  }
}
