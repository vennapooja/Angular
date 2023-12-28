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
import { AddAdminComponent } from './addadmin/add-admin/add-admin.component';
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
    HomeComponent
   
   
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,HttpClientModule,FormsModule,NgxPaginationModule, BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
