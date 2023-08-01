import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { Hotels } from '../hotels.model';
import { Bookings } from '../booking.model';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private static baseUrl = "http://localhost:3000";
  hotelBooking: Customer = new Customer();
  hotel: Hotels[] = [];
  book: Bookings = new Bookings();

  constructor(private http: HttpClient) { }
  //This is for registering the user 
  customerRegister(customerReg: Customer) {
    this.http.post(HotelsService.baseUrl + "/customer", customerReg).subscribe(data => data = customerReg);
  }
  updateCustomerDetail(custReg: Customer) {
    this.http.put(HotelsService.baseUrl + "/customer/" + custReg.id, custReg).subscribe(data => data = custReg);
  }
  list(): Observable<Customer[]> {
    return this.http.get<Customer[]>(HotelsService.baseUrl + "/customer/");
  }
  cancleBooking(id: number) {
    this.http.delete(HotelsService.baseUrl + "/customer/" + id).subscribe();
  }

  searchByCity(city: string) {
    return this.http.get<Hotels[]>(HotelsService.baseUrl + "/hotel?city=" + city);

  }

  listBooking(custId: number): Observable<Customer> {
    return this.http.get<Customer>(HotelsService.baseUrl + "/customer/" + custId)

  }

  updateBookingDetail(customerBooking: Customer) {
    this.http.put(HotelsService.baseUrl + "/customer/", +customerBooking.id).subscribe(data => data = customerBooking);
  }

}
