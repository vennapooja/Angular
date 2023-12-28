import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewadminComponent } from './view/viewadmin/viewadmin.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { AddtransportationComponent } from './addtransportation/addtransportation/addtransportation.component';
import { ViewtransportationComponent } from './viewtransportation/viewtransportation/viewtransportation.component';
import { WelcometransportationComponent } from './welcometransportation/welcometransportation/welcometransportation.component';
import { WelcomeadminComponent } from './login/welcomeadmin/welcomeadmin.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { HomeComponent } from './Home/home/home.component';
import { AddAdminComponent } from '../../smartcityguide/src/app/addadmin/add-admin/add-admin.component';
import { ViewtransportationfacilitiesComponent } from './user/viewtransportationfacilities/viewtransportationfacilities.component';
import { WelcomeTouristPlaceComponent } from './welcome/welcome-tourist-place/welcome-tourist-place.component';
import { AddTouristPlaceComponent } from './add/add-tourist-place/add-tourist-place.component';
import { SearchTouristPlaceComponent } from './search/search-tourist-place/search-tourist-place.component';
import { ViewTouristPlaceComponent } from './view/view-tourist-place/view-tourist-place.component';
import { ViewTouristComponent } from './user/view-tourist/view-tourist.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';

import { AddHotelsComponent } from './add/add-hotels/add-hotels.component';
import { WelcomeHotelsComponent } from './welcome/welcome-hotels/welcome-hotels.component';
import { ViewHotelComponent } from './user/view-hotel/view-hotel.component';
import { ViewHotelsComponent } from './view/view-hotels/view-hotels.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { ViewpaymentComponent } from './user/viewpayment/viewpayment.component';
import { AddbookingComponent } from './user/addbooking/addbooking.component';
import { AddpaymentComponent } from './user/addpayment/addpayment.component';
import { HotelswelcomeComponent } from './user/hotelswelcome/hotelswelcome.component';
import { TransportwelcomeComponent } from './user/transportwelcome/transportwelcome.component';
import { TouristwelcomeComponent } from './user/touristwelcome/touristwelcome.component';
import { BookingviewComponent } from './admin/bookingview/bookingview.component';
import { PaymentviewComponent } from './admin/paymentview/paymentview.component';
import { AboutUsComponent } from './admin/about-us/about-us.component';




const routes: Routes = [{path:'',component:HomeComponent},
{path:'welcome',component:WelcomeComponent},
{path:'adminlist',component:ViewadminComponent},
{path:'adminform',component:AddAdminComponent},
{path:'updateAdmin/:id',component:AddAdminComponent},
{path :'search/:nameofadmin',component:ViewadminComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'welcometransportation',component:WelcometransportationComponent},
{path:'Transportationfacilitylist',component:ViewtransportationComponent},
{path:'Transportationfacilityform',component: AddtransportationComponent},
{path:'updateTransportationfacility/:id',component: AddtransportationComponent},
{path :'searchtransportation/:transportationType',component:ViewtransportationComponent},
{path: 'user/home', component:UserhomeComponent },
{path:'user/signup',component:UsersignupComponent},
{path:'user/myprofile',component:MyprofileComponent},
{path:'user/login',component:UserloginComponent},
{path:'user/viewtransportationfacilities',component:ViewtransportationfacilitiesComponent},
{path:'welcometouristplace',component:WelcomeTouristPlaceComponent },
{ path: 'Touristlist', component: ViewTouristPlaceComponent },
{ path: 'Touristform', component: AddTouristPlaceComponent },
{ path: 'search/:placeName',component: SearchTouristPlaceComponent },
{ path: 'updateTouristplace/:placeId', component: AddTouristPlaceComponent },
{ path: 'viewtourist', component: ViewTouristComponent },
{path:'Hotelslist',component:ViewHotelsComponent},
{path:'Hotelsform',component:AddHotelsComponent},
{path:'updateHotels/:hotelId',component:AddHotelsComponent},
{ path:'viewhotels',component:ViewHotelsComponent},
  {path:'welcomehotels',component:WelcomeHotelsComponent},
  {path:'user/viewhotel',component:ViewHotelComponent},
  {path:'user/viewbooking',component:ViewbookingComponent},
  {path:'user/viewpayments',component:ViewpaymentComponent},
  {path:'user/addbooking/:id',component:AddbookingComponent},
  {path:'user/addpayments',component:AddpaymentComponent},
  {path:'user/hotelwelcome',component:HotelswelcomeComponent},
  {path:'user/welcometransport',component:TransportwelcomeComponent},
  {path:'user/welcometourist',component:TouristwelcomeComponent},
  {path:'viewbooking',component:ViewbookingComponent},
  {path:'viewpayments',component:ViewpaymentComponent},
       
  {path:'admin/booking/veiwall',component:BookingviewComponent},
  {path:'admin/payment/veiwall',component:PaymentviewComponent},
  {path:'AboutUs',component:AboutUsComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
