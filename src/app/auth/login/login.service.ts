import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './login.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = `${environment.backend}/user/login`;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<User[]>(this.API);
  }

  create(user : any) {
    console.log(user)
    return this.http.post(this.API, user);
  }
}