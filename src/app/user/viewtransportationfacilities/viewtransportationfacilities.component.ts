import { Component, OnInit } from '@angular/core';
import { TransportationService } from '../../service/transportation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtransportationfacilities',
  templateUrl: './viewtransportationfacilities.component.html',
  styleUrl: './viewtransportationfacilities.component.css'
})
export class ViewtransportationfacilitiesComponent implements OnInit {

  transportationfacility: any;
  hasSearchTransportation: boolean;
  SearchTransportation: string;
  p: number = 1;
  count: number = 3;
  
  constructor(private transportationService:TransportationService,private router:Router,private activateRoute:ActivatedRoute) { }
  ngOnInit():void{
    this.getAllTransportationFacility();
  }
  getAllTransportationFacility():void
{
  this.hasSearchTransportation=this.activateRoute.snapshot.paramMap.has("transportationType");
  if(this.hasSearchTransportation)
  {
    this.SearchTransportation=this.activateRoute.snapshot.paramMap.get("transportationType");
    console.log(this.SearchTransportation)
    this.transportationService.getTransportationFacilityBytransportationType(this.SearchTransportation).subscribe((data: any)=>{
      console.log(data);
      this.transportationfacility=data;
    })
  }
else{
  this.transportationService.getAllTransportationFacility().subscribe(data=>{
    console.log(data);
    this.transportationfacility=data;
  });
}
}

}
