import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getAuthorizationHeader() {
    const t = localStorage.getItem('token');
    return t;
  }

    public isAuthenticated(): boolean {
       // Check whether the token is expired and return
      return true;
    }

}
