import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryListComponent} from './inventory-list/inventory-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: InventoryListComponent
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
export class InventoryRoutingModule {}
