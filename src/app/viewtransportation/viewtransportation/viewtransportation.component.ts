import { Component, OnInit } from '@angular/core';
import { TransportationService } from '../../service/transportation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewtransportation',
  templateUrl: './viewtransportation.component.html',
  styleUrl: './viewtransportation.component.css'
})
export class ViewtransportationComponent implements OnInit {
  Transportationfacility: any;
  hasSearchName: boolean;
  searchName: string;
  p: number = 1;
  count: number = 3;

  constructor(private TransportationService:TransportationService,private router:Router,private activateRoute:ActivatedRoute) { }
  ngOnInit():void{
    this.getAllTransportationFacility();
  }
  getAllTransportationFacility():void
{
  this.hasSearchName=this.activateRoute.snapshot.paramMap.has("transportationType");
  if(this.hasSearchName)
  {
    this.searchName=this.activateRoute.snapshot.paramMap.get("transportationType");
    console.log(this.searchName)
    this.TransportationService.getTransportationFacilityBytransportationType(this.searchName).subscribe(data=>{
      console.log(data);
      this.Transportationfacility=data;
    })
  }
else{
  this.TransportationService.getAllTransportationFacility().subscribe(data=>{
    console.log(data);
    this.Transportationfacility=data;
  });
}
}

addTransportationFacility():void{
  this.router.navigateByUrl("/Transportationfacilityform");
}


deleteTransportationFacility(id:number)
{
  console.log(id);
  if(confirm("Do you want to delete ?"))
  {
    this.TransportationService.deleteTransportationFacility(id).subscribe(data=>{
      console.log(data);
      this.getAllTransportationFacility();
    })
  };
}
updateTransportationFacility(id:number)
{
  this.router.navigateByUrl("/updateTransportationfacility/"+id);

}

logout() {
  
  this.router.navigateByUrl("welcome")
}

}
