import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InventoryRoutingModule} from './inventory-routing.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';

@NgModule({
  declarations: [InventoryListComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
