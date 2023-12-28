import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.css'
})
export class UsersignupComponent implements OnInit {
  user:User=new User(0,"","","","","")
  isEditable!: boolean;
  constructor(public userservice:UserService,public route:Router,public activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getuserbyid())
  }
  getuserbyid(): void{
    const uid  = parseFloat(this.activateRoute.snapshot.paramMap.get("uid"));
    console.log(uid)
    if(uid>0)
    {
      this.isEditable=true;
      this.userservice.getuserbyid(uid).subscribe(data=>{
        this.user=data;
        console.log(this.user);
      });
    }
  }
  SaveUsers(){
    if(this.isEditable){
      this.userservice.updateUser(this.user).subscribe(data=>{
        alert("Successfully updated "+this.user.username)
        sessionStorage.clear()
        localStorage.clear()
        this.route.navigateByUrl("/user/login")});
    }
    else{
      
    this.userservice.saveUser(this.user).subscribe(data =>{
      alert("Successfully Register ")
      this.route.navigateByUrl("/user/login")
    },
    error => alert("enter the user data / change the user name")
      );
      
  }

}
onSubmit() {
  this.route.navigateByUrl("/welcome");

}
}


