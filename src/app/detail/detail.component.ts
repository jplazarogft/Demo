import { Component, OnInit } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { Icon } from '@sharedModels/icon';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { detailIcons } from '@mocks/icons';
import { detailMenu, headerMenu } from '@mocks/menu';
import { learnMore } from '@mocks/learn-more';
import { sections } from '@mocks/sections';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 'Catalogue';
  detailMenu: NavMenuOption[] = detailMenu;
  activeDetailMenuOption = 'Overview';
  icons: Icon[] = detailIcons;
  iconClass = 'chart-pie';
  learnMore: LearnMoreIcon[] = learnMore;
  title = 'Android.name.component.button.call';
  sections: AditionalContentSection[] = sections;

  constructor() {}

  ngOnInit() {}

  updateActiveMenuLink = (option: NavMenuOption) => {
    this.activeHeaderMenuOption = option.label;
  };

  updateSectionMenuLink = (option: NavMenuOption) => {
    this.activeDetailMenuOption = option.label;
  };
}
