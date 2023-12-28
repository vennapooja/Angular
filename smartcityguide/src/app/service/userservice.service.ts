import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private newuserurl = "http://localhost:8080/user/signup";
  private updateUrl="http://localhost:8080/user/update";
  private loginurl = "http://localhost:8080/user/loginnew";

  constructor(private http:HttpClient) { }

  saveUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<User>(this.newuserurl, user, httpOptions);
  }
  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<User>(this.updateUrl + `/${user}`, user, httpOptions);
  }
  getlogin(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.loginurl}`, user);
  }
}
