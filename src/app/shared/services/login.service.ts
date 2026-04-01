import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly authStorageKey = 'isAuthenticated';
  private isLogin = this.readAuthState();

  constructor() { }

  login() {
    this.isLogin = true;
    this.persistAuthState();
    return this.isLogin;
  }

  logout() {
    this.isLogin = false;
    this.persistAuthState();
  }

  isAuthenticated() {
    return this.isLogin;
  }

  private persistAuthState() {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(this.authStorageKey, String(this.isLogin));
  }

  private readAuthState() {
    if (typeof localStorage === 'undefined') {
      return false;
    }

    return localStorage.getItem(this.authStorageKey) === 'true';
  }
}
