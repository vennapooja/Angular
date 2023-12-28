import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-welcometransportation',
  templateUrl: './welcometransportation.component.html',
  styleUrl: './welcometransportation.component.css'
})
export class WelcometransportationComponent implements OnInit {
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






