import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent  implements OnInit {
  user: User = new User(0, "", "", "", "","")
  username: string ;
  usersName: string;
  userrPhone: string;
  userpassword: string;
  userId:number;
  email : string;
  users: User = JSON.parse(sessionStorage.getItem("user"))
  constructor(private userservice: UserService, private route: Router, public activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }
  Getlogin(): void {

    this.userservice.getlogin(this.user).subscribe(data => {

      alert("Login Successfully"),

        console.log("Response Data"+ data)

      sessionStorage.setItem("user", JSON.stringify(data))

      this.route.navigateByUrl("/user/home")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.route.navigateByUrl("/user/signup")
  }
  onSubmit() {
    this.route.navigateByUrl("/user/home");

  }



}
