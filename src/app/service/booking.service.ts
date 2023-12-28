import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Booking } from '../model/booking';
import { Hotels } from '../model/hotels';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private addbookingurl ="http://localhost:8080/Booking/create";
  private deletebookingurl = "http://localhost:8080/Booking/delete"; 
  private viewallbookingurl = "http://localhost:8080/Booking"; 
  private viewuserbookingurl = "http://localhost:8080/Booking/user"; 
  private findByhotelIdURL="http://localhost:8080/Hotels/find";

  constructor(private http: HttpClient) {}

  
  //GetBookingById
getbookingbyid(uid: number):Observable<Booking>  {
  const uidUrl = this.viewallbookingurl + "/" + uid;
  return this.http.get<Booking>(uidUrl);
}
//GetBookingByUserId
getbookingbyuserid(uid: number):Observable<Booking>  {
  const uidUrl = this.viewuserbookingurl + "/" + uid;
  return this.http.get<Booking>(uidUrl);
}
//Get All Bookings
getAllBooking():Observable<any>
{
 return this.http.get(this.viewallbookingurl);
}

//delete Booking by ID
deleteBooking(id: number): Observable<any> {
  const headers = new HttpHeaders({ 'Authorization': 'auth-token' }); 
  const url = `${this.deletebookingurl}/${id}`;
  return this.http.delete<Booking>(url, { headers });
}
//Book Hotel
BookHotel(hotelId:number,userId:number,noOfRooms:any):Observable<any>
{
  const headers={'content-type':'application/json'};
  const body=JSON.stringify(noOfRooms);
  return this.http.post(this.addbookingurl+"/"+hotelId+"/"+userId,body,{'headers':headers});
}
/*BookHotel(hotelId: number, userId: number, noOfRooms: any): Observable<any> {
  const headers = { 'content-type': 'application/json' };
  const body = JSON.stringify(noOfRooms);
  
  const url = this.addbookingurl
    .replace('{hotelId}', hotelId.toString())
    .replace('{userId}', userId.toString());
    return this.http.post(this.addbookingurl+"/"+hotelId+"/"+userId,body,{'headers':headers});
 // return this.http.post(url, body, { 'headers': headers });
}*/
getHotelsById(hotelId:number):Observable<Hotels>
  {
    const HotelIDURl=this.findByhotelIdURL+"/"+hotelId;
    return  this.http.get<Hotels>(HotelIDURl);
  }

}