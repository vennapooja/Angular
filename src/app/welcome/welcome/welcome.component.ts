import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
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





