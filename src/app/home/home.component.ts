import { Component, OnInit } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { learnMore } from '@mocks/learn-more';
import { headerMenu } from '@mocks/menu';
import { sections } from '@mocks/sections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerMenu: NavMenuOption[] = headerMenu;
  sections: AditionalContentSection[] = sections;
  learnMore: LearnMoreIcon[] = learnMore;

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
