import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SubNavWidgetComponent } from './widgets/sub-nav-widget/sub-nav-widget.component';
import { SubHeaderComponent } from './widgets/sub-header/sub-header.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { BillingComponent } from './billing/billing.component';
import { PlanComponent } from './widgets/plan/plan.component';
import { PaymentMethodsComponent } from './widgets/payment-methods/payment-methods.component';
import { InvoiceHistoryComponent } from './widgets/invoice-history/invoice-history.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ProfileComponent,
    SubNavWidgetComponent,
    SubHeaderComponent,
    ProfileInfoComponent,
    PasswordChangeComponent,
    BillingComponent,
    PlanComponent,
    PaymentMethodsComponent,
    InvoiceHistoryComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class UsersModule { }
