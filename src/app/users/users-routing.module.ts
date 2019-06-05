import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfileInfoComponent} from './profile-info/profile-info.component';
import {PasswordChangeComponent} from './password-change/password-change.component';
import {BillingComponent} from './billing/billing.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ProfileInfoComponent
      },
      {
        path: 'password-change',
        component: PasswordChangeComponent
      },
      {
        path: 'billing',
        component: BillingComponent
      }
    ]
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
export class UsersRoutingModule {}
