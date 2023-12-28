import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { ViewadminComponent } from './view/viewadmin/viewadmin.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search/search/search.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { WelcomeadminComponent } from './login/welcomeadmin/welcomeadmin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddtransportationComponent } from './addtransportation/addtransportation/addtransportation.component';
//import { Transportationfacility } from './model/transportationfacility';
import { SearchtransportationComponent } from './searchtransportation/searchtransportation/searchtransportation.component';
import { ViewtransportationComponent } from './viewtransportation/viewtransportation/viewtransportation.component';
import { WelcometransportationComponent } from './welcometransportation/welcometransportation/welcometransportation.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { HomeComponent } from './Home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddadminComponent } from './addadmin/addadmin/addadmin.component';
import { AddAdminComponent } from '../../smartcityguide/src/app/addadmin/add-admin/add-admin.component';
import { AddTouristPlaceComponent } from './add/add-tourist-place/add-tourist-place.component';
import { ViewTouristPlaceComponent } from './view/view-tourist-place/view-tourist-place.component';
import { SearchTouristPlaceComponent } from './search/search-tourist-place/search-tourist-place.component';
import { WelcomeTouristPlaceComponent } from './welcome/welcome-tourist-place/welcome-tourist-place.component';
import { ViewTouristComponent } from './user/view-tourist/view-tourist.component';
import { AddHotelsComponent } from './add/add-hotels/add-hotels.component';
import { ViewHotelsComponent } from './view/view-hotels/view-hotels.component';
import { WelcomeHotelsComponent } from './welcome/welcome-hotels/welcome-hotels.component';
import { ViewHotelComponent } from './user/view-hotel/view-hotel.component';
import { AddbookingComponent } from './user/addbooking/addbooking.component';
import { AddpaymentComponent } from './user/addpayment/addpayment.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { ViewpaymentComponent } from './user/viewpayment/viewpayment.component';
import { HotelswelcomeComponent } from './user/hotelswelcome/hotelswelcome.component';
import { ViewtransportationfacilitiesComponent } from './user/viewtransportationfacilities/viewtransportationfacilities.component';
import { TransportwelcomeComponent } from './user/transportwelcome/transportwelcome.component';
import { TouristwelcomeComponent } from './user/touristwelcome/touristwelcome.component';
import { PaymentviewComponent } from './admin/paymentview/paymentview.component';
import { BookingviewComponent } from './admin/bookingview/bookingview.component';
import { AboutUsComponent } from './admin/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewadminComponent,
    WelcomeComponent,
    AddAdminComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeadminComponent,
    AddtransportationComponent,
    SearchtransportationComponent,
    ViewtransportationComponent,
    WelcometransportationComponent,
    UserhomeComponent,
    UserloginComponent,
    UsersignupComponent,
    HomeComponent,
    AddadminComponent,
    AddTouristPlaceComponent,
    ViewTouristPlaceComponent,
    SearchTouristPlaceComponent,
    WelcomeTouristPlaceComponent,
    ViewTouristComponent,
    AddHotelsComponent,
    ViewHotelsComponent,
    WelcomeHotelsComponent,
    ViewHotelComponent,
    AddbookingComponent,
    AddpaymentComponent,
    ViewbookingComponent,
    ViewpaymentComponent,
    HotelswelcomeComponent,
    ViewtransportationfacilitiesComponent,
    TransportwelcomeComponent,
    TouristwelcomeComponent,
    PaymentviewComponent,
    BookingviewComponent,
    AboutUsComponent
   
   
  ],
  imports: [
    BrowserModule,RouterModule,MatIconModule,
    AppRoutingModule,HttpClientModule,FormsModule,NgxPaginationModule, BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
