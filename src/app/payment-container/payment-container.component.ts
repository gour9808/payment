import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-container',
  templateUrl: './payment-container.component.html',
  styleUrls: ['./payment-container.component.scss']
})
export class PaymentContainerComponent implements OnInit {

  paymentData = {
    transactionId: "T2112291316540220488011",
    name: "Manoj",
    userId: "7383228492@paytm",
    money: 300,
    bankName: "State Bank of India - 4159",
    utr: "136354290914",
    date: "26 February 2022 at 3:26 PM",
    time: "3:26 PM"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
