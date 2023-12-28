import { User } from "./user";

export class Payment {
  paymentId: number;
  totalPrice: number;
  bookingId: number;
  cardName: string;
  cardNumber: string;
  expYear: string;
  cvv: number;
  paidDate: Date;
  paidAmount: number;
  user: User;

  constructor(
      paymentId: number,totalPrice: number,bookingId: number,cardName: string,cardNumber: string,expYear: string,cvv: number,paidDate: Date,paidAmount: number,user: User) {};
}

