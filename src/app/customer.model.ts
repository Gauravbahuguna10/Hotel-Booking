import { Bookings } from "./booking.model";

export class Customer{
    public id: number=0;
    public customerName: string="";
    public mobile: number=0;
    public email: string="";
    public password: number=0;
    public booking: Bookings[]=[]
}