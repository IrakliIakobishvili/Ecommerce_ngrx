import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionsRoutingModule} from './transactions-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import { TransactionsTableComponent } from './widgets/transactions-table/transactions-table.component';

@NgModule({
  declarations: [TransactionsComponent, TransactionsTableComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
