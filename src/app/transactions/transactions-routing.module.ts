import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionsComponent} from './transactions/transactions.component';


const appRoutes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionsRoutingModule {}
