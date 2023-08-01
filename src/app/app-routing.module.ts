import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EditComponent } from './edit/edit.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {path:"login-page", component:LoginPageComponent},
  {path:"register-page", component:RegisterPageComponent},
  {path:"home", component:HomeComponent},
  {path:"list", component:ListComponent},
  
  {path:"payment", component:PaymentPageComponent},
  {path:"search-result", component:SearchResultComponent},
  {path:"bookings", component:BookingsComponent},
  {path:"detail", component:DetailsPageComponent},
  {path:"edit", component:EditComponent},
  {path:"invoice", component:InvoiceComponent},
  {path:"**",redirectTo:'/home', pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
