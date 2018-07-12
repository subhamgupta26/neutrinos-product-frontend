import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  baseUrl= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  createHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept-Language', 'en' );
    return headers;
  }

  getAllProducts() {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    return this.http.get(`${this.baseUrl}/products`, {headers: headers} );
  }

  addToCart(userId, product) {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    return this.http.put(`${this.baseUrl}/users/${userId}/updateCart`, product, {headers: headers} );
  }

  getUserCart(userId) {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    return this.http.get(`${this.baseUrl}/users/${userId}/cart`, {headers: headers} );
  }

  getCurrentUser() {
    const headers = new HttpHeaders();
    this.createHeader(headers);
    return this.http.get(`${this.baseUrl}/users/current`, {headers: headers} );
  }
}
