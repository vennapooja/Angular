import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-welcomeadmin',
  templateUrl: './welcomeadmin.component.html',
  styleUrl: './welcomeadmin.component.css'
})
export class WelcomeadminComponent implements OnInit {
  admin:Admin

  constructor(private activateroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(()=>this.admin=JSON.parse(sessionStorage.getItem("admin")))

  }
  logout() {
    if (sessionStorage.getItem("admin")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.route.navigateByUrl("/login")
    }
    else {
      alert("No user loged in")
    }
  }
} 




