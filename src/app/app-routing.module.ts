// import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { RouterModule, Routes } from "@angular/router";

// import { HomeComponent } from "./home/home.component";

// const appRoutes: Routes = [
//   { path: "", component: HomeComponent },
//   {
//     path: "customers",
//     loadChildren: "../app/customers/customers.module#CustomersModule"
//   }
// ];

// @NgModule({
//   imports: [CommonModule, RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule],
//   declarations: []
// })
// export class AppRoutingModule {}





import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedContainersModule} from './shared-containers/shared-containers.module';
import {MainLayoutComponent} from './shared-containers/main-layout/main-layout.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'profile',
  //   component: MainLayoutComponent,
  //   loadChildren: './users/users.module#UsersModule'
  // },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'catalog',
    component: MainLayoutComponent,
    loadChildren: './catalog/catalog.module#CatalogModule'
  },
  {
    path: 'inventory',
    component: MainLayoutComponent,
    loadChildren: './inventory/inventory.module#InventoryModule'
  },
  {
    path: 'cart',
    component: MainLayoutComponent,
    loadChildren: './cart/cart.module#CartModule'
  },
  // {
  //   path: 'orders',
  //   component: MainLayoutComponent,
  //   loadChildren: './orders/orders.module#OrdersModule'
  // },
  // {
  //   path: 'transactions',
  //   component: MainLayoutComponent,
  //   loadChildren: './transactions/transactions.module#TransactionsModule'
  // },
  // {
  //   path: 'store',
  //   component: MainLayoutComponent,
  //   loadChildren: './store/store.module#StoreModule'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    SharedContainersModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
