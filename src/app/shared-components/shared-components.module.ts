import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainNavigationItemComponent } from './main-navigation-item/main-navigation-item.component';
import {RouterModule} from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { AdvancedFilterComponent } from './advanced-filter/advanced-filter.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { CatalogListItemComponent } from './catalog-list-item/catalog-list-item.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule({
  declarations: [
    MainNavigationComponent,
    MainNavigationItemComponent,
    CategoryFilterComponent,
    AdvancedFilterComponent,
    CategoryHeaderComponent,
    CatalogListItemComponent,
    ContentHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainNavigationComponent,
    MainNavigationItemComponent,
    CategoryFilterComponent,
    AdvancedFilterComponent,
    CategoryHeaderComponent,
    CatalogListItemComponent,
    ContentHeaderComponent
  ]
})
export class SharedComponentsModule { }
