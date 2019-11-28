import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { headerMenu } from '@mocks/menu';
import { Subscription } from 'rxjs';

@Component({
  template: '',
})
export class ViewComponent implements OnDestroy {
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 0;
  subscriptions = new Subscription();
  title: string;

  constructor(public router: Router) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  updateActiveMenuLink = (option: number) => {
    this.activeHeaderMenuOption = option;
    this.router.navigate([this.headerMenu[option].link]);
  };
}
