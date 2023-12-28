import { Component, OnInit } from '@angular/core';
import { Hotels } from '../../model/hotels';
import { HotelsService } from '../../service/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrl: './add-hotels.component.css'
})
export class AddHotelsComponent implements OnInit{
  hotels:Hotels =new Hotels(0,"","",0,"",0,"",0,"");
    isEditable: boolean ; 
    activateRoutesnapshot: any;
    constructor(private hotelsservice:HotelsService,private router:Router,private activateRoute:ActivatedRoute){}
    ngOnInit(): void {
      this.hotels
      this.activateRoute.paramMap.subscribe(()=>this.hotels);
      this.getHotelsByhotelId();
  
    }
    onSubmit()
    {
      console.log(this.hotels);
      if(this.isEditable){
        this.hotelsservice.updateHotels(this.hotels).subscribe((data: any) =>
          this.router.navigateByUrl("/Hotelslist"));
  
      }
      else{
  
      this.hotelsservice.SaveHotels( this.hotels ).subscribe((data: any) =>
        console.log(data));
        this.router.navigateByUrl("/Hotelslist");
    }}
  
    getHotelsByhotelId(){
      const hotelId  = parseFloat(this.activateRoute.snapshot.paramMap.get("hotelId"));
  
    console.log(hotelId);
    if(hotelId> 0)
    {
      this.isEditable = true;
      this.hotelsservice.getHotelsByhotelId(hotelId).subscribe((data: Hotels)=>{
        this.hotels = data;
        console.log(this.hotels)
      });
    }
    }
   // onFileSelected(event: any): void {
    //  const file: File = event.target.files[0];
  
      // You can now do something with the selected file, such as uploading it to a server
      // or displaying a preview in your UI
     // console.log(file);
  
      // If you want to bind the selected file to 'hotels.images', you can do so here
      // this.hotels.images = file;
   // }
   
    
  }
  