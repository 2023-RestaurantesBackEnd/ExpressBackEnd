import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  get(path: string) {
    return this.httpClient.get(`${this.baseUrl}${path}`);
  }

  post(path: string, body: any) {
    return this.httpClient.post(`${this.baseUrl}${path}`, body);
  }
}
