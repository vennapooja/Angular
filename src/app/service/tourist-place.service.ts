import { Injectable } from '@angular/core';
import { TouristPlace } from '../model/tourist-place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TouristPlaceService {

  private TouristPlacelisturl="http://localhost:8080/Tourist/list";
  private TouristPlaceaddurl="http://localhost:8080/Tourist/add";
  private Touristplacedeleteurl="http://localhost:8080/Tourist/delete";
  private TouristplacefindIdurl="http://localhost:8080/Tourist/find";
  private TouristPlaceUpdate="http://localhost:8080/Tourist/update";
  private TouristPlacesearch="http://localhost:8080/Tourist/search";
  
  
  constructor(private http:HttpClient) { }
  getAllTouristPlaces():Observable<any>
  {
    return this.http.get(this.TouristPlacelisturl);
   }
   AddTouristPlace(touristplace:TouristPlace):Observable<any>
   {
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return  this.http.post<TouristPlace>(this.TouristPlaceaddurl,touristplace,httpOptions);
   }
  
  deleteTouristPlace(placeId: number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  
  return this.http.delete<TouristPlace>(`${this.Touristplacedeleteurl}/${placeId}`, httpOptions);
  }
  
  getTouristPlaceByID(placeId:number):Observable<TouristPlace>
  {
    const TouristPlaceIdURl=this.TouristplacefindIdurl+"/"+placeId;
    return  this.http.get<TouristPlace>(TouristPlaceIdURl);
  }
  
  UpdateTouristPlace(touristplace:TouristPlace):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(touristplace);
    return this.http.put(this.TouristPlaceUpdate,body,{'headers':headers});
  }
  
  getTouristPlaceByplaceName(placeName:any):Observable<TouristPlace>
  {
    const searchURL =   "http://localhost:8080/Tourist/search/findByplaceNameIgnoreCase?placeName=" + placeName;
  
    return  this.http.get<TouristPlace>(searchURL);
  }
  
  
  
}
