import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hotels } from '../model/hotels';
import { Booking } from '../model/booking';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
 
  private Hotelslisturl="http://localhost:8080/Hotels/list";
  private Hotelssaveurl="http://localhost:8080/Hotels/add";
  private Hotelsdeleteurl="http://localhost:8080/Hotels/delete";
  private findByhotelIdURL="http://localhost:8080/Hotels/find";
  private HotelsUpdate="http://localhost:8080/Hotels/update";
  private viewallbookingurl="http://localhost:8080/Booking";
  private addpaymenturl =   "http://localhost:8080/payments";     
  private viewpaybyuseridurl=  "http://localhost:8080/payments/user"  ;   
  private addbookingurl  =   "http://localhost:8080/Booking/create";  
  private viewpaybybookingidurl = "http://localhost:8080/payments/bookingId";
  private viewallpayurl="http://localhost:8080/payments";
  private deletebypayidurl ="http://localhost:8080/payments/delete";
  private deletebookingurl = "http://localhost:8080/Booking/delete"; 

                      
 constructor(private http:HttpClient) { }
  getAllHotels():Observable<any>
  {
    return this.http.get(this.Hotelslisturl);
   }
   SaveHotels(Hotels:Hotels):Observable<any>
   {
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return  this.http.post<Hotels>(this.Hotelssaveurl,Hotels,httpOptions);
   }

deleteHotels(hotelId: number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  return this.http.delete<Hotels>(`${this.Hotelsdeleteurl}/${hotelId}`, httpOptions);
}

getHotelsByhotelId(hotelId:number):Observable<Hotels>
  {
    const HotelsIDURl=this.findByhotelIdURL+"/"+hotelId;
    return  this.http.get<Hotels>(HotelsIDURl);
  }

  updateHotels(Hotels:Hotels):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(Hotels);
    return this.http.put(this.HotelsUpdate,body,{'headers':headers});
  }

  getHotelsByhotelName(hotelName:any):Observable<Hotels>
  {
    const searchURL = "http://localhost:8080/Hotels/search/findByhotelNameIgnoreCase?hotelName=" + hotelName;
  
    return  this.http.get<Hotels>(searchURL);
  }

  getBookingById(userid: number):Observable<Booking>  {
    const uidUrl = this.viewallbookingurl + "/" + userid;
    return this.http.get<Booking>(uidUrl);
  }
  
    addPayment(payment: any, bookingId: number, userId: number): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.addpaymenturl}/${bookingId}/${userId}`;
      return this.http.post(url, payment, { headers });
    }
    getpaymentbyuserid(uid: number):Observable<Payment>  {
      const uidUrl = this.viewpaybyuseridurl + "/" + uid;
      return this.http.get<Payment>(uidUrl);
    }
  bookHotel(hotelId:number,userId:number,Guests:any):Observable<any>
{
  const headers={'content-type':'application/json'};
  const body=JSON.stringify(Guests);
  return this.http.post(this.addbookingurl+"/"+hotelId+"/"+userId,body,{'headers':headers});
}
getAllHotel():Observable<any>
    {
      return this.http.get(this.Hotelslisturl);
     }
     getHotelByhotelName(hotelName:any):Observable<Hotels>
     {
       const searchURL = "http://localhost:8080/Hotels/search/findByhotelNameIgnoreCase?hotelName=" + hotelName;
     
       return  this.http.get<Hotels>(searchURL);
     }
//GetpaymentById
getpaymentbyid(uid: number):Observable<Payment>  {
  const uidUrl = this.viewpaybybookingidurl + "/" + uid;
  return this.http.get<Payment>(uidUrl);
}

//Get All Payments
getAllPayments():Observable<any>
{
 return this.http.get(this.viewallpayurl);
}

//delete payment by ID
deletePayment(id: number) {
   
  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  };
  return  this.http.delete<Payment>(this.deletebypayidurl+`/${id}`,httpOptions);
}
getbookingbyid(uid: number):Observable<Booking>  {
  const uidUrl = this.viewallbookingurl + "/" + uid;
  return this.http.get<Booking>(uidUrl);
}
getAllBookings():Observable<any>
{
 return this.http.get(this.viewallbookingurl);
}

deleteBooking(id: number): Observable<any> {
  const headers = new HttpHeaders({ 'Authorization': 'auth-token' }); 
  const url = `${this.deletebookingurl}/${id}`;
  return this.http.delete<Booking>(url, { headers });
}



}