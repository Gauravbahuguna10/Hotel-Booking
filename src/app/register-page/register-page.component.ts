import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  customer: Customer = new Customer();
   custDetails: Customer[]=[];
   newCustId: number=100;


 

  constructor(private service:HotelsService, private router: Router){}

 

  save(){

    // this.service.customerRegister(this.customer);

    // this.router.navigate(["/login-page"]);
    this.service.list().subscribe((data)=>{
      this.custDetails=data;
      var flag:boolean=true;
      this.newCustId+=(this.custDetails.length+1);
      for(let i=0; i<this.custDetails.length; i++){
        if(this.custDetails[i].email==this.customer.email){
          alert("This Email is already registerd!");
          flag=false;
          this.router.navigate(['/login']);
          break;
        }
      }

      if(flag){
        this.customer.id=this.newCustId;
        console.log(this.customer)
        this.service.customerRegister(this.customer);
        alert("Registration Successful !");
        this.router.navigate(['/login-page']);
      }
    })

  }

}
