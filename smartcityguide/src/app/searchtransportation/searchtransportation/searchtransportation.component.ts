import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchtransportation',
  templateUrl: './searchtransportation.component.html',
  styleUrl: './searchtransportation.component.css'
})
export class SearchtransportationComponent implements OnInit {
  transportationType:string
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchtransportation()
  {
    this.router.navigateByUrl("/searchtransportation/"+this.transportationType);
  }

}