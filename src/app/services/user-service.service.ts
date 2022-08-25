import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpcli: HttpClient) { }

  private updateMenu = new Subject<void>();

  get updatemenu() {
    return this.updateMenu;
  }

  // POST creates a user
  createUser(Userobj: User): Observable<any> {
    return this.httpcli.post<User>("http://localhost:9001/user/register", Userobj)
  }

  // POST login user and retrieves a token
  logInUser(Userobj: User): Observable<any> {
    return this.httpcli.post<User>("http://localhost:9001/user/login", Userobj)
  }
  // GET
  getUserBySocialSecurityNumber (socialSecurityNumber: Number): Observable<any> {
    return this.httpcli.get(`http://localhost:9001/user/getUserBySocialSecurityNumber/${socialSecurityNumber}`)
  }

  // saves token in sessionStorage
  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
    console.log("loggin out")
  }

  // Retrieves token from sessionStorages
  getBearerToken() {
    return sessionStorage.getItem('token');
  }

}
