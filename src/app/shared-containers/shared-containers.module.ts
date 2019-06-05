import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import {SharedComponentsModule} from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class SharedContainersModule { }
