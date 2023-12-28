import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transportationfacility } from '../model/transportationfacility';

@Injectable({
  providedIn: 'root'
})
export class TransportationService  {

  private facilitieslist="http://localhost:8080/facilities/list";
  private facilitiessave="http://localhost:8080/facilities/add";
  private facilitiesdelete="http://localhost:8080/facilities/delete";
  private facilitiesfindIdurl="http://localhost:8080/facilities/find";
  private facilitiesupdate="http://localhost:8080/facilities/update";
  private facilitiessearch="http://localhost:8080/facilities/search";


  constructor(private http:HttpClient) { }
  getAllTransportationFacility():Observable<any>
  {
    return this.http.get(this.facilitieslist);
   }
   SaveTransportation(transportationfacility:Transportationfacility):Observable<any>
   {
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return  this.http.post<Transportationfacility>(this.facilitiessave,transportationfacility,httpOptions);
   }

deleteTransportation(Id: number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  return this.http.delete<Transportationfacility>(`${this.facilitiesdelete}/${Id}`, httpOptions);
}

getTransportationFacilityById(Id:number):Observable<Transportationfacility>
  {
    const facilitiesIDURl=this.facilitiesfindIdurl+"/"+Id;
    return  this.http.get<Transportationfacility>(facilitiesIDURl);
  }

updateTransportation(transportationfacility:Transportationfacility):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(transportationfacility);
    return this.http.put(this.facilitiesupdate,body,{'headers':headers});
  }

getByTransportationType(transportationType:any):Observable<Transportationfacility>
  {
    const searchURL =   "http://localhost:8080/facilities/searchtransportation/findByTransportationTypeIgnoreCase?transportationType=" + transportationType;
  
    return  this.http.get<Transportationfacility>(searchURL);
  }


}