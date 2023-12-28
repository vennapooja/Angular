import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private newuserurl = "http://localhost:8080/user/signup";
  private viewuserurl = "http://localhost:8080/user/viewuserr";
  private viewuserbyidurl = "http://localhost:8080/user/id";
  private loginuserurl =  "http://localhost:8080/user/login";
  private viewuserbyusernameurl = "http://localhost:8080/user/username";
  private userdeleteURl = "http://localhost:8080/user/delete";



  constructor(private http:HttpClient) { }
   //SignUP-user
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
  //Login-user
  getlogin(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.loginuserurl}`, user);
  }
  //GetUserById
  getuserbyid(uid: number):Observable<User>  {
    const uidUrl = this.viewuserbyidurl + "/" + uid;
    return this.http.get<User>(uidUrl);
  }

  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<User>(this.viewuserurl + `/${user}`, user, httpOptions);
  }
//Get user by username
getUserByUsername(username:String):Observable<User>  {
  const uidUrl = this.viewuserbyusernameurl + "/" + username;
  return this.http.get<User>(uidUrl);
}
//get all users
getAllUser():Observable<any>
{
 return this.http.get(this.viewuserurl);
}


//delete user by id


deleteUser(id: number) {
   
  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  };
  return  this.http.delete<User>(this.userdeleteURl+`/${id}`,httpOptions);
}


}
