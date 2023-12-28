import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../../service/hotels.service';

@Component({
  selector: 'app-view-hotels',
  templateUrl: './view-hotels.component.html',
  styleUrl: './view-hotels.component.css'
})
export class ViewHotelsComponent implements OnInit {
  Hotels: any;
  hasSearchName: boolean;
  searchName: string;
  p: number = 1;
  count: number = 3;
  

  constructor(private hotelsService:HotelsService,private router:Router,private activateRoute:ActivatedRoute) { }
  ngOnInit():void{
    this.getAllHotels();
  }
  getAllHotels():void
{
  this.hasSearchName=this.activateRoute.snapshot.paramMap.has("hotelName");
  if(this.hasSearchName)
  {
    this.searchName=this.activateRoute.snapshot.paramMap.get("hotelName");
    console.log(this.searchName)
    this.hotelsService.getHotelsByhotelName(this.searchName).subscribe(data=>{
      console.log(data);
      this.Hotels=data;
    })
  }
else{
  this.hotelsService.getAllHotels().subscribe(data=>{
    console.log(data);
    this.Hotels=data;
  });
}
}

addHotels():void{
  this.router.navigateByUrl("/Hotelsform");
}


deleteHotels(hotelId:number)
{
  console.log(hotelId);
  if(confirm("Do you want to delete ?"))
  {
    this.hotelsService.deleteHotels(hotelId).subscribe(data=>{
      console.log(data);
      this.getAllHotels();
    })
  };
}
updateHotels(hotelId:number)
{
  this.router.navigateByUrl("/updateHotels/"+hotelId);

}
logout() {
  
    this.router.navigateByUrl("welcome")
  }
 


}
