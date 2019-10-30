import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { Component, OnInit } from '@angular/core';
import { headerMenu } from '@mocks/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerMenu: NavMenuOption[] = headerMenu;

  constructor() {}

  ngOnInit() {}

  updateActiveMenuLink = activeLabel => {
    const newHeaderMenu = this.headerMenu.map(option => {
      const { label, link } = option;
      return { active: label === activeLabel, label, link };
    });
    this.headerMenu = newHeaderMenu;
  };
}
