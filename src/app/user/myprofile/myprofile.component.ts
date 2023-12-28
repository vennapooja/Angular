import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
  username: any
  user: User;
  isEditable: boolean;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user")))
    this.checkSessionAndNavigate();
  }
  constructor(private userService: UserService, public router: Router, private activeRoute: ActivatedRoute) { }

  getUserById() {
    const username = this.user.username;

    console.log(username);
    if (username != null) {
      this.isEditable = true;
      this.userService.getUserByUsername("username").subscribe(data => {
        this.user = data;
        console.log(this.user)
      });
    }
  }
  logout() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.router.navigateByUrl("/user/login")
    }
    else {
      alert("No user loged in")
    }
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl("/user/login");
    }

  }

}
