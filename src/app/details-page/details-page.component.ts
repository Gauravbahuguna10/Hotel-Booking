import { Component, OnInit } from '@angular/core';
import { Hotels } from '../hotels.model';
import { Router } from '@angular/router';
import { HotelsService } from '../services/hotels.service';
import { Bookings } from '../booking.model';

const gstPercentage = 0.18;

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  hotel: Hotels = new Hotels();
  booking: Bookings = new Bookings();
  roomtype: string[] = ["Delux", "A/C", "Non-A/C"];
  isLoggedIn: boolean = false;
  checkInDate: string = '';
  checkOutDate: string = '';
  priceWithoutGst: number = 0;
  finalPrice: number = 0;
  deluxDailyPrice: number = 6000;
  acDailyPrice: number = 4000;
  nonAcDailyPrice: number = 2500;
  hotelName: string = "";

  constructor(private service: HotelsService, private router: Router) {
    this.hotel = JSON.parse(localStorage.getItem("Hotel") || "");
    this.hotelName = this.hotel.hotelName;
  }

  ngOnInit() {
  }

  //to calculate prices
  calculatePriceAndFinalPrice() {
    const result = this.calculatePriceAndFinalPriceInternal();
    if (result !== null) {
      this.priceWithoutGst = result.price;
      this.finalPrice = result.finalPrice;
    } else {
      this.priceWithoutGst = 0;
      this.finalPrice = 0;
    }
  }
  private calculatePriceAndFinalPriceInternal(): {
    price: number, finalPrice: number
  } | null {
    const checkInDate = this.parseDate(this.booking.checkIn);
    const checkOutDate = this.parseDate(this.booking.checkOut);
    if (!checkInDate || !checkOutDate) {
      return null;
    }
    // calculating time difference
    const timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    // Converting time difference to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // Calculation of total price

    let dailyPrice: number;
    switch (this.booking.roomType) {
      case "Delux": dailyPrice = this.deluxDailyPrice; break;
      case "A/C": dailyPrice = this.acDailyPrice; break;
      case "Non-A/C": dailyPrice = this.nonAcDailyPrice; break;
      default: dailyPrice = 0;
    }
    let totalPrice: number;
    switch (this.booking.guest) {
      case 1:
      case 2:
        totalPrice = daysDiff * dailyPrice;
        break;
      case 3:
        totalPrice = daysDiff * dailyPrice * 1.5;
        break;
      case 4:
        totalPrice = daysDiff * dailyPrice * 2;
        break;
      case 5:
        totalPrice = daysDiff * dailyPrice * 2.5;
        break;
      case 6:
        totalPrice = daysDiff * dailyPrice * 3;
        break;
      default:
        totalPrice = 0;
        break;
    }
    // Calculate the final price including GST
    const gstAmount = totalPrice * gstPercentage;
    const finalPrice = totalPrice + gstAmount;
    return { price: totalPrice, finalPrice: finalPrice };
  }
  // to calculate date by parsing
  private parseDate(inputDate: string): Date | null {
    const [day, month, year] = inputDate.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    return isNaN(date.getTime()) ? null : date;
  }
  navigate() {
    console.log(this.booking)
    const result = this.calculatePriceAndFinalPriceInternal();
    if (result !== null) {
      this.priceWithoutGst = result.price;
      this.finalPrice = result.finalPrice;
      this.booking.price = this.finalPrice;
      this.booking.hotelName = this.hotelName;
      localStorage.setItem("BookingDetails", JSON.stringify(this.booking) || "");
      this.router.navigate(['/payment'])
    }
  }

}

