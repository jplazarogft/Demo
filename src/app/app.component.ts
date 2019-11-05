import { Component } from '@angular/core';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { footerMenu } from '@mocks/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  footerMenu: NavMenuOption[] = footerMenu;
}
