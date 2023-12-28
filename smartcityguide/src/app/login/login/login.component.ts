import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { LoginserviceService } from '../../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  admin: Admin = new Admin(0, "", "", "", "", "", "")
  admins: Admin = JSON.parse(sessionStorage.getItem("admin"))

  constructor(private loginservices:LoginserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  Getlogin(): void {

    this.loginservices.getlogin(this.admin).subscribe((data :any) => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("admin", JSON.stringify(data))

      this.router.navigateByUrl("/welcome")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.router.navigateByUrl("/register")
  }
  onSubmit() {
    this.router.navigateByUrl("/adminlist");

  }
}
