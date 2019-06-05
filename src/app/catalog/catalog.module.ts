import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogRoutingModule} from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    CatalogListComponent
  ],
  imports: [
    SharedComponentsModule,
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
