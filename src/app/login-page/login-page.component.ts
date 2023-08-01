import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
flag=false;
cred: Customer= new Customer();
fetched: Customer= new Customer();

 constructor(private service : HotelsService, private router: Router){
  if(localStorage.getItem("CustomerEmail")){
    alert("Please logout! to login again.");
    this.router.navigate(['/home']);
  }
 }

// authenticate(){
//   this.service.validate(this.cred).then(resp=> resp.subscribe((data)=> 
//   {
//     localStorage.setItem("Name", this.cred.customerName);
//     console.log( this.cred.customerName);

//     this.fetched= data[0];
//     console.log(typeof(this.fetched));
//     if(this.cred.email== this.fetched.email){
//       console.log("Login successfull");
//       this.router.navigate(['/home'])
//     }
//     else{
//       console.log("login failed")
//     }
//   }
authenticate(){
  var flag: boolean=true;
  let customer: Customer[]=[];
  this.service.list().subscribe((data)=>{
    customer=data;
    for(let i=0;i<customer.length;i++){
      if(customer[i].email == this.cred.email && customer[i].password == this.cred.password){
        localStorage.setItem("CustomerEmail",JSON.stringify(this.cred.email));
        localStorage.setItem("CustomerPassword",JSON.stringify(this.cred.password));
        localStorage.setItem("CustomerID",JSON.stringify(customer[i].id));
        localStorage.setItem("CustomerName",JSON.stringify(customer[i].customerName));
        localStorage.setItem("Mobile",JSON.stringify(customer[i].mobile));
        alert("Login Successful");
        flag=false;
        this.router.navigate(['/home']);
        break;
      }
    }
if(flag){
  alert("Invalid Credentials")
}

  })
}
  

}


