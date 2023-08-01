import { Component } from '@angular/core';
import { Bookings } from '../booking.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  customer:Customer=new Customer();
//   custId:number=0;
//   constructor(private service:HotelsService,private router:Router){
// // this.custId= JSON.parse(localStorage.getItem("CustomerId")|| "");
// // console.log("c");
// // console.log(this.custId);
//   }
custId: number=0;

constructor(private service : HotelsService, private router: Router){

}

ngOnInit(){
  this.custId=JSON.parse(localStorage.getItem("CustomerID")||"");
  console.log(this.custId);
  this.service.listBooking(this.custId).subscribe((data)=>{
        this.customer=data;
        console.log("in");
        console.log(this.customer);
      })
}

  // ngOnInit(){
  //     this.service.listBooking(this.custId).subscribe((data)=>{
  //     this.customer=data;
  //     console.log("in");
  //     console.log(this.customer);
  //   })
  // }
  invoice(){
    this.router.navigate(['/invoice'])
  }
  

}
