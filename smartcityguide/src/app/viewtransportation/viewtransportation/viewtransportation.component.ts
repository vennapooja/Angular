import { Component, OnInit } from '@angular/core';
import { TransportationService } from '../../service/transportation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewtransportation',
  templateUrl: './viewtransportation.component.html',
  styleUrl: './viewtransportation.component.css'
})
export class ViewtransportationComponent implements OnInit {
  transportationfacility: any;
  hasSearchTransportation: boolean;
  SearchTransportation: string;
  p: number = 1;
  count: number = 5;

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
    this.transportationService.getByTransportationType(this.SearchTransportation).subscribe(data=>{
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

addTransportation():void{
  this.router.navigateByUrl("/facilitiesform");
}


deleteTransportation(Id:number)
{
  console.log(Id);
  if(confirm("Do you want to delete ?"))
  {
    this.transportationService.deleteTransportation(Id).subscribe(data=>{
      console.log(data);
      this.getAllTransportationFacility();
    })
  };
}
updateTransportation(Id:number)
{
  this.router.navigateByUrl("/updateTransportation/"+Id);

}



}

