import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  
  private adminlist="http://localhost:8080/admin/list";
  private adminsave="http://localhost:8080/admin/addAdmin";
  private adminfindIdurl="http://localhost:8080/admin/find";
  private adminUpdate="http://localhost:8080/admin/update";
  private admindeleteurl="http://localhost:8080/admin/delete";
  private adminsearch="http://localhost:8080/admin/search";
  //private loginurl = "http://localhost:8080/admin/loginnew";
  
  

  constructor(private http:HttpClient) { }
  getAllAdmin():Observable<any>
  {
    return this.http.get(this.adminlist);
   }
   SaveAdmin(admin:Admin):Observable<any>
   {
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return  this.http.post<Admin>(this.adminsave,admin,httpOptions);
   }
   getAdminById(id:number):Observable<Admin>
  {
    const adminIdURl=this.adminfindIdurl+"/"+id;
    return  this.http.get<Admin>(adminIdURl);
  }
   updateAdmin(admin:Admin):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(admin);
    return this.http.put(this.adminUpdate,body,{'headers':headers});
  }
  deleteAdmin(adminId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
  
    return this.http.delete<Admin>(`${this.admindeleteurl}/${adminId}`, httpOptions);
  }
  getAdminByNameOfAdmin(nameofadmin:any):Observable<Admin>
  {
    const searchURL =   "http://localhost:8080/admin/search/findBynameofadminIgnoreCase?nameofadmin=" + nameofadmin;
  
    return  this.http.get<Admin>(searchURL);
  }
 
   
  }
