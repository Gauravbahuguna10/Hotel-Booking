import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { Bookings } from '../booking.model';
import { Customer } from '../customer.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
hotel: Hotels=new Hotels();
booking : Bookings= new Bookings ();
customer:Customer[]=[];
newBookingId: number=201;
constructor(private service:HotelsService, private router:Router){
  let hotelData= localStorage.getItem("Hotel"); 
  if(hotelData){
    try{
      
      this.hotel=JSON.parse(hotelData);
    } catch(error){
      console.log("Error parsing Hotel Data : ", error);
    }
  } else{
    console.error("Hotel Data not found in localStorage");
  }
  
  let bookingData= localStorage.getItem("BookingDetails");
  if(bookingData){
    try{
      this.booking=JSON.parse(bookingData);
  } catch(error){
    console.error("Error parsing Booking Details data:", error);
  }
  
  // this.booking=JSON.parse(localStorage.getItem("BookingDetails")||"")
}
else{
  console.error("BookingDetails data not found in localStorage.");
}
}
  
  ngOnInit(){
    if(!localStorage.getItem("CustomerEmail") ){
      alert("You are not Logged In")
      this.router.navigate(['/login-page'])
    }

}

pay(){
   this.service.list().subscribe((data)=>{
    console.log("in");
    this.customer=data; 
    console.log(this.customer);
    for(let i=0; i<this.customer.length; i++){
      let no:number=this.customer[i].booking.length;
      console.log("in2")
      this.newBookingId+=no;
      
    }
    
    this.booking.bookingId=this.newBookingId;
    console.log(this.booking.bookingId);
    console.log(JSON.parse(localStorage.getItem("CustomerID")||""));
    
    let custId:number= (JSON.parse(localStorage.getItem("CustomerID")||"")-101);
    
    console.log(custId);
    console.log(this.customer[custId]);
    this.customer[custId].booking.push(this.booking);
    console.log(this.customer[custId]);
    
    this.service.updateCustomerDetail(this.customer[custId]);
    this.router.navigate(['/bookings']);
   })
}
}
