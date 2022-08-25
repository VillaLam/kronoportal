import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpcli: HttpClient) { }

  createUser(Userobj: User): Observable<any> {
    return this.httpcli.post<User>("http://localhost:9001/user/register", Userobj)
  }

  logInUser(Userobj: User): Observable<any> {
    return this.httpcli.post<User>("http://localhost:9001/user/login", Userobj)
  }

  getUserBySocialSecurityNumber (socialSecurityNumber: Number): Observable<any> {
    return this.httpcli.get(`http://localhost:9001/user/getUserBySocialSecurityNumber/${socialSecurityNumber}`)
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
    console.log("loggin out")
  }

  getBearerToken() {
    return sessionStorage.getItem('token');
  }

}
