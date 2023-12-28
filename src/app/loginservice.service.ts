import { Injectable } from '@angular/core';
import { Admin } from './model/admin';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService{

 private updateUrl="http://localhost:8080/admin/update";
private loginurl = "http://localhost:8080/admin/loginnew";

constructor(private http:HttpClient) { }


updateAdmin(admin: Admin): Observable<Admin> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  return this.http.put<Admin>(this.updateUrl + `/${admin}`, admin, httpOptions);
}
getlogin(admin: Admin): Observable<Admin> {
  console.log(admin);
  return this.http.post<Admin>(`${this.loginurl}`, admin);
}
}

