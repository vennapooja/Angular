import { Component, OnInit } from '@angular/core';
import { TransportationService } from '../../service/transportation.service';
import { Transportationfacility } from '../../model/transportationfacility';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addtransportation',
  templateUrl: './addtransportation.component.html',
  styleUrl: './addtransportation.component.css'
})
export class AddtransportationComponent  implements OnInit{
  transportationfacility:Transportationfacility =new Transportationfacility(0,"","",0,0,"");
  isEditable: boolean ; 
  activateRoutesnapshot: any;
  constructor(private Transportationservice:TransportationService,private router:Router,private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.transportationfacility 
    this.activateRoute.paramMap.subscribe(()=>this.transportationfacility );
    this.getTransportationFacilityById();

  }
  onSubmit()
  {
    console.log(this.transportationfacility );
    if(this.isEditable){
      this.Transportationservice.updateTransportationFacility (this.transportationfacility ).subscribe((data: any) =>
        this.router.navigateByUrl("/Transportationfacilitylist"));

    }
    else{

    this.Transportationservice.SaveTransportationFacility( this.transportationfacility ).subscribe((data: any) =>
      console.log(data));
      this.router.navigateByUrl("/Transportationfacilitylist");
  }}

  getTransportationFacilityById(){
    const id  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));

  console.log(id);
  if(id> 0)
  {
    this.isEditable = true;
    this.Transportationservice.getTransportationFacilityById(id).subscribe((data:Transportationfacility )=>{
      this.transportationfacility  = data;
      console.log(this.transportationfacility )
    });
  }
  }

}