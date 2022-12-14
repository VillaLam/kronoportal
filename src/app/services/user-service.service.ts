import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: Array<User> = [];
  usersSubject: BehaviorSubject<Array<User>> = new BehaviorSubject(
    this.users

  );

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
  getUserBySocialSecurityNumber(socialSecurityNumber: string): Observable<any> {
    return this.httpcli.get(`http://localhost:9001/user/getUserBySocialSecurityNumber/${socialSecurityNumber}`)
  }

  //GET all users
  getUsersFromServer() {
    return this.httpcli
      .get<User[]>(`http://localhost:9001/user/getAllUsers`)
      .subscribe((apiUsers) => {
        this.users = apiUsers;
        this.usersSubject.next(this.users);
      });
  }

  viewUsers(): Observable<User[]> {
    return this.usersSubject;
  }

  //DELETE user
  deleteUser(userId) {
    return this.httpcli
      .delete(`http://localhost:9001/user//deleteUser/${userId}`)
      .pipe(
        tap((userId) => {
          let indx = this.users.findIndex((user) => user.userId === userId);
          this.users.splice(indx, 1);
          this.usersSubject.next(this.users);
        })
      );
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
