import { Component, OnInit } from '@angular/core';
import { TransportationService } from '../../service/transportation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transportationfacility } from '../../model/transportationfacility';

@Component({
  selector: 'app-addtransportation',
  templateUrl: './addtransportation.component.html',
  styleUrl: './addtransportation.component.css'
})
export class AddtransportationComponent implements OnInit{
  transportationfacility:Transportationfacility =new Transportationfacility(0,"","",0,0,"");
    isEditable: boolean ;
    activateRoutesnapshot: any;
    constructor(private transportationService:TransportationService,private router:Router,private activateRoute:ActivatedRoute){}
    ngOnInit(): void {
      this.transportationfacility
      this.activateRoute.paramMap.subscribe(()=>this.transportationfacility);
      this.getTransportationFacilityById();
      
  
    }
    onSubmit()
    {
      console.log(this.transportationfacility);
      if(this.isEditable){
        this.transportationService.updateTransportation(this.transportationfacility).subscribe((data: any)=>
          this.router.navigateByUrl("/facilitieslist"));
  
      }
      else{
  
      
      this.transportationService.SaveTransportation( this.transportationfacility ).subscribe(data =>
        console.log(data));
        this.router.navigateByUrl("/facilitieslist");
    }}
    getTransportationFacilityById(){
      const transportationId  = parseFloat(this.activateRoute.snapshot.paramMap.get("Id"));
  
    console.log(transportationId);
    if(transportationId> 0)
    {
      this.isEditable = true;
      this.transportationService.getTransportationFacilityById(transportationId).subscribe((data: any)=>{
        this.transportationfacility = data;
        console.log(this.transportationfacility)
      });
    }
    }
  

}
