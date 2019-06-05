import { Component, OnInit } from '@angular/core';
import {ProfileMenuItem} from '../../models/profile.menu.item';

@Component({
  selector: 'drop-sub-nav-widget',
  templateUrl: './sub-nav-widget.component.html',
  styleUrls: ['./sub-nav-widget.component.scss']
})
export class SubNavWidgetComponent implements OnInit {

  public menu: ProfileMenuItem[] = [];

  constructor() {
    this.menu = [
      {
        title: 'My Profile',
        url: '/profile/info',
        type: 'link',
        actionName: null
      },
      {
        title: 'Change Password',
        url: '/profile/password-change',
        type: 'link',
        actionName: null
      },
      {
        title: 'Billing',
        url: '/profile/billing',
        type: 'link',
        actionName: null
      },
      {
        title: 'Sign Out',
        url: null,
        type: 'action',
        actionName: 'signOut'
      }
    ];
  }

  signOut() {
    alert('signed out');
  }

  ngOnInit() {
  }

}
