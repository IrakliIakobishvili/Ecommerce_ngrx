import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";

import { CustomSerializer } from "./shared/utils";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileInfoComponent } from './users/profile-info/profile-info.component';

// import { CatalogListComponent } from './catalog/catalog-list/catalog-list.component';
// import { MainLayoutComponent } from './shared-containers/main-layout/main-layout.component';
// import { MainNavigationComponent } from './shared-components/main-navigation/main-navigation.component';
// import { MainNavigationItemComponent } from './shared-components/main-navigation-item/main-navigation-item.component';
// import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, ProfileInfoComponent],
  imports: [
    BrowserModule,

    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}



// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import {AppRoutingModule} from './app-routing.module';
// import {FileUploadService} from './shared-services/file-upload-service';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     FileUploadService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
