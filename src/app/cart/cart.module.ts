import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartRoutingModule} from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import { CartTableComponent } from './widgets/cart-table/cart-table.component';
import { ShippingDetailsComponent } from './widgets/shipping-details/shipping-details.component';
import { CartInfoComponent } from './widgets/cart-info/cart-info.component';

@NgModule({
  declarations: [CartComponent, CartTableComponent, ShippingDetailsComponent, CartInfoComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CartRoutingModule
  ]
})
export class CartModule { }
