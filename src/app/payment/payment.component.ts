import { Component, Input, OnInit } from '@angular/core';

interface paymentData {
  transactionId: string,
    name: string,
    userId: string,
    money: number,
    bankName: string,
    utr: string,
    date: string,
    time: string
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() icon: string = "BACK";
  @Input() data: paymentData ;


  name = "Gourav Sharma";
  constructor() {
  this.data = {
    transactionId:  "",
    name: "",
    userId: "",
    money: 10,
    bankName: "",
    utr: "",
    date: "",
    time: ""
  }
   }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
