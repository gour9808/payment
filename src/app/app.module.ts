import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PaymentHistoryDetailsComponent } from './payment-history-details/payment-history-details.component';
import { PaymentContainerComponent } from './payment-container/payment-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentHistoryComponent,
    PaymentHistoryDetailsComponent,
    PaymentContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
