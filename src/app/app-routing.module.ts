import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentContainerComponent } from './payment-container/payment-container.component';
import { PaymentHistoryDetailsComponent } from './payment-history-details/payment-history-details.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'payment', pathMatch: 'full' },
  { path: 'payment', component: PaymentContainerComponent },
  { path: 'payment-detail', component: PaymentHistoryDetailsComponent },
  { path: 'payment-history', component: PaymentHistoryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
