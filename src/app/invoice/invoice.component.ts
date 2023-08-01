import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { Bookings } from '../booking.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
hotel: any;
booking: any;
customer: any;
mobile:any;
name: any;


  ngOnInit(){
   this.hotel= JSON.parse(localStorage.getItem("Hotel")||"");
    this.booking= JSON.parse(localStorage.getItem("BookingDetails")|| "");
    this.customer=localStorage.getItem("CustomerEmail");
    this.mobile=localStorage.getItem("Mobile");
    this.name=JSON.parse(localStorage.getItem("CustomerName")||"");

  }

}
