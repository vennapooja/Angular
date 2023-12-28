import { Component, OnInit } from '@angular/core';
import { TouristPlace } from '../../model/tourist-place';
import { ActivatedRoute, Router } from '@angular/router';
import { TouristPlaceService } from '../../service/tourist-place.service';

@Component({
  selector: 'app-add-tourist-place',
  templateUrl: './add-tourist-place.component.html',
  styleUrl: './add-tourist-place.component.css'
})
export class AddTouristPlaceComponent implements OnInit{
  touristplace:TouristPlace =new TouristPlace(0,"","","",0,0,"","","",0,"");
    isEditable: boolean ;
    activateRoutesnapshot: any;
    constructor(private touristService:TouristPlaceService,private router:Router,private activateRoute:ActivatedRoute){

    }
    ngOnInit(): void 
    {
      this.activateRoute.paramMap.subscribe(()=>this.touristplace);
      this.getTouristPlaceByPlaceId();
      this.activateRoute.paramMap.subscribe(()=>this.getTouristPlaceByPlaceId);

  
    }
    getTouristPlaceByPlaceId() {
      const placeId = parseFloat(this.activateRoute.snapshot.paramMap.get("placeId"));
    
      console.log(placeId);
      if (placeId > 0) {
        this.isEditable = true;
        this.touristService.getTouristPlaceByID(placeId).subscribe(data => {
          this.touristplace = data;
          console.log(this.touristplace);
        });
      }
    }
    
   
    onSubmit()
    {
      console.log(this.touristplace);
      if(this.isEditable){
        this.touristService.UpdateTouristPlace(this.touristplace).subscribe((data: any) =>
          this.router.navigateByUrl("/Touristlist"));
  
      }
      else{
  
      this.touristService.AddTouristPlace( this.touristplace ).subscribe((data: any) =>
        console.log(data));
        this.router.navigateByUrl("/Touristlist");
    }}
  
    getTouristPlaceByplaceId(){
      const placeId  = parseFloat(this.activateRoute.snapshot.paramMap.get("placeId"));
  
    console.log(placeId);
    if(placeId> 0)
    {
      this.isEditable = true;
      this.touristService.getTouristPlaceByID(placeId).subscribe((data: TouristPlace)=>{
        this.touristplace = data;
        console.log(this.touristplace)
      });
    }
    }
  
  }