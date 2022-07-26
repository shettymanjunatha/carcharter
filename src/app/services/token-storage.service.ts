import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY) || "";
  }
}
