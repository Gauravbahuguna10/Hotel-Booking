import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
// import { Customer } from '../customer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // customers: Customer[]=[];
  hotel : Hotels[]=[];
  cities: string[]=["Pune","Bangalore"];
  city: string="";
  custName:string="";
  dropdownState: 'closed' | 'open' = 'closed';

  constructor(private service: HotelsService, private router: Router) {
    // this.custName= localStorage.getItem("Name")|| "";
  }
  search() {
    this.service.searchByCity(this.city).subscribe(data => {
      this.hotel = data;
      this.navigateToResultPage();
    });
  }
  navigateToResultPage() {
    this.router.navigate(['/search-result'], { state: { hotel: this.hotel } });
  }
// viewCustDetails(id:number){
//   localStorage.setItem("Customer",JSON.stringify(this.customers[id]));
//   this.router.navigate(['/profile']);
// }
toggleDropdown(): void {
  this.dropdownState = this.dropdownState === 'closed' ? 'open' : 'closed';
}


}
