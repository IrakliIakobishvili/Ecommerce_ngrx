import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogListComponent} from './catalog-list/catalog-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CatalogListComponent
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
export class CatalogRoutingModule {}
