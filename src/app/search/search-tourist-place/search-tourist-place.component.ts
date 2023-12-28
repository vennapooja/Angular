import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tourist-place',
  templateUrl: './search-tourist-place.component.html',
  styleUrl: './search-tourist-place.component.css'
})
export class SearchTouristPlaceComponent implements OnInit {
  placeName:string 
    constructor(private router:Router) { }
  
    ngOnInit(): void {
    }
    search()
    {
      this.router.navigateByUrl("/search/"+this.placeName);
    }
  

}
