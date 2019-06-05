import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../shared-models/menu.item';

@Component({
  selector: 'drop-main-navigation-item',
  templateUrl: './main-navigation-item.component.html',
  styleUrls: ['./main-navigation-item.component.scss']
})
export class MainNavigationItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  constructor() { }

  ngOnInit() {
  }

}
