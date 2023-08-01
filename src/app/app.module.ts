import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultComponent,
    DetailsPageComponent,
    PaymentPageComponent,
    BookingsComponent,
    LoginPageComponent,
    RegisterPageComponent,
    InvoiceComponent,
    EditComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
