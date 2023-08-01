import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hotel-booking';
custName:string="";

  constructor(private router: Router){
    
  
    this.custName= localStorage.getItem("Name")|| "";
    
}
logout(){
  localStorage.clear();
  this.router.navigate(['/login-page'])
}

}
