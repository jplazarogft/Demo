import { Component } from '@angular/core';
import { footerMenu } from '@mocks/menu';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  footerMenu: NavMenuOption[] = footerMenu;
}
