import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpParams
} from '@angular/common/http';

@Injectable()
export class HomeService {

  baseUrl= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  createHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', 'en' );
    return headers;
  }


  login(user) {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    return this.http.post(`${this.baseUrl}/public/login`, user, {headers: headers} );
  }

  signup(user) {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    return this.http.post(`${this.baseUrl}/public/signup`, user, {headers: headers} );
  }
}
