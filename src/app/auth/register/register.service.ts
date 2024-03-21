import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserRegister as User } from './register.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly API = `${environment.backend}/user`;

  constructor(private http: HttpClient) { }

  create(user : any) {
    return this.http.post(this.API, user);
  }
}