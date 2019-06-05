import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import { ChartComponent } from './widgets/chart/chart.component';
import { NewsAndUpdatesComponent } from './widgets/news-and-updates/news-and-updates.component';
import { BalanceComponent } from './widgets/balance/balance.component';
import { SupportComponent } from './widgets/support/support.component';
import { AlertsComponent } from './widgets/alerts/alerts.component';

@NgModule({
  declarations: [DashboardComponent, ChartComponent, NewsAndUpdatesComponent, BalanceComponent, SupportComponent, AlertsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
