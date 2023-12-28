import { Component, OnInit } from '@angular/core';
import { TouristPlaceService } from '../../service/tourist-place.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-tourist-place',
  templateUrl: './view-tourist-place.component.html',
  styleUrl: './view-tourist-place.component.css'
})
export class ViewTouristPlaceComponent implements OnInit {
 
  hasSearchName: boolean ;
  searchPlaceName: string ;
  p: number = 1;
  count: number = 3;
  touristplace: any;
  constructor(private touristService:TouristPlaceService,private router:Router,private activateRoute:ActivatedRoute) { }
  ngOnInit():void{
    this.getAllTouristPlaces();
  }
 
  getAllTouristPlaces():void
{
  this.hasSearchName=this.activateRoute.snapshot.paramMap.has("placeName");
  if(this.hasSearchName)
  {
    this.searchPlaceName=this.activateRoute.snapshot.paramMap.get("placeName");
    console.log(this.searchPlaceName)
    this.touristService.getTouristPlaceByplaceName(this.searchPlaceName).subscribe(data=>{
      console.log(data);
      this.touristplace=data;
    })
  }
else{
  this.touristService.getAllTouristPlaces().subscribe(data=>{
    console.log(data);
    this.touristplace=data;
  });
}
}

addtourist():void{
  this.router.navigateByUrl("/Touristform");
}


deleteTouristPlace(placeId:number)
{
  console.log(placeId);
  if(confirm("Do you want to delete ?"))
  {
    this.touristService.deleteTouristPlace(placeId).subscribe((data: any)=>{
      console.log(data);
      this.getAllTouristPlaces();
    })
  };
}
updateTouristplace(placeId:number)
{
  this.router.navigateByUrl("/updateTouristplace/"+placeId);

}

logout() {
  
  this.router.navigateByUrl("welcome")
}

}
