import { Component, OnInit } from '@angular/core';
import { detailIcons } from '@mocks/icons';
import { headerMenu } from '@mocks/menu';
import { Icon } from '@sharedModels/icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 'Catalogue';
  icons: Icon[] = detailIcons;
  iconClass = 'chart-pie';
  title = 'Android.name.component.button.call';

  constructor() {}

  ngOnInit() {}

  updateActiveMenuLink = (option: NavMenuOption) => {
    console.log(`Menu Clicked: ${option.label}`);
  };
}
