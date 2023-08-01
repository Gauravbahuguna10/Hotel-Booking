import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  hotel : Hotels[]=[];
  
  images:any[]=[];
  
  constructor(private route: ActivatedRoute,private router: Router, private http : HttpClient) {}

  ngOnInit() {
this.http.get('../../hotel.json').subscribe((data:any)=>{
  this.images=data.images;
})
    const state = window.history.state;
    if (state && state.hotel) {
      this.hotel = state.hotel;
    }
  }

  // viewDetails(hotelId: number) {
  //   // Find the hotel details based on the provided hotelId
  //   const hotelDetails = this.hotel.find((h) => h.hotelId === hotelId);

  //   // Redirect to the HotelDetailsPage and pass the hotel details as state
  //   this.router.navigate(['/details-page'], { state: { hotelDetails: hotelDetails } });
  // }
  

  viewDetails(h:Hotels){

    localStorage.setItem("Hotel",JSON.stringify(h));
    console.log("h")
    console.log(h);
    
    this.router.navigate(['/detail']);

  }

}
 