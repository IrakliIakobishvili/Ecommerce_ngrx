import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import { OrdersTableComponent } from './widgets/orders-table/orders-table.component';

@NgModule({
  declarations: [OrdersComponent, OrdersTableComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
