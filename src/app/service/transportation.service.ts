import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Transportationfacility } from '../model/transportationfacility';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransportationService  {

  private TransportationFacilitylisturl="http://localhost:8080/facilities/list";
  private Transportationfacilitysaveurl="http://localhost:8080/facilities/add";
  private TransportationFacilitydeleteurl="http://localhost:8080/facilities/delete";
  private findByIdURL="http://localhost:8080/facilities/find";
  private TransportationfacilityUpdate="http://localhost:8080/facilities/update";
  private TransportationFacilitysearch="http://localhost:8080/facilities/search";
                 
                   
                      
 constructor(private http:HttpClient) { }
  getAllTransportationFacility():Observable<any>
  {
    return this.http.get(this.TransportationFacilitylisturl);
   }
   SaveTransportationFacility(Transportationfacility:Transportationfacility):Observable<any>
   {
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return  this.http.post<Transportationfacility>(this.Transportationfacilitysaveurl,Transportationfacility,httpOptions);
   }
  

deleteTransportationFacility(id: number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  return this.http.delete<Transportationfacility>(`${this.TransportationFacilitydeleteurl}/${id}`, httpOptions);
}

getTransportationFacilityById(id:number):Observable<Transportationfacility>
  {
    const TransportationFacilityIDURl=this.findByIdURL+"/"+id;
    return  this.http.get<Transportationfacility>(TransportationFacilityIDURl);
  }

  updateTransportationFacility(Transportationfacility:Transportationfacility):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(Transportationfacility);
    return this.http.put(this.TransportationfacilityUpdate,body,{'headers':headers});
  }

  getTransportationFacilityBytransportationType(transportationType:any):Observable<Transportationfacility>
  {
    const searchURL = "http://localhost:8080/TransportationFacility/searchtransportation/:transportationType/findBytransportationTypeIgnoreCase?transportationType=" + transportationType;
  
    return  this.http.get<Transportationfacility>(searchURL);
  }


}