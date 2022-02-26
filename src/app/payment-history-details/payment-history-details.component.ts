import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history-details',
  templateUrl: './payment-history-details.component.html',
  styleUrls: ['./payment-history-details.component.scss']
})
export class PaymentHistoryDetailsComponent implements OnInit {
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
