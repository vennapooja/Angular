import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewadminComponent } from './view/viewadmin/viewadmin.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { AddAdminComponent } from './addadmin/add-admin/add-admin.component';
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



const routes: Routes = [{path:'',component:HomeComponent},{path:'welcome',component:WelcomeComponent},{path:'adminlist',component:ViewadminComponent},
{path:'adminform',component:AddAdminComponent},{path:'updateAdmin/:id',component:AddAdminComponent},{path :'search/:nameofadmin',component:ViewadminComponent},
{path:'register',component:RegisterComponent},{path:'login',component:LoginComponent},{path:'welcometransportation',component:WelcometransportationComponent},
{path:'facilitieslist',component:ViewtransportationComponent},{path:'facilitiesform',component: AddtransportationComponent},{path:'updateTransportation/:Id',component: AddtransportationComponent},
{path :'searchtransportation/:transportationType',component:ViewtransportationComponent},{path: 'user/home', component:UserhomeComponent },
{path:'user/signup',component:UsersignupComponent},
{path:'user/login',component:UserloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
