import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends ApiService {
  findAllUsers() {
    return this.get('users');
  }
}
