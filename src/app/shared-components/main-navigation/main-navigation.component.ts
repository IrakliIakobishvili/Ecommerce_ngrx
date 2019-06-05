import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared-models/menu.item';
import {MainMenu} from '../../nav';

@Component({
  selector: 'drop-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  public mainMenu: MenuItem[] = MainMenu;
  constructor() { }

  ngOnInit() {
  }

}
