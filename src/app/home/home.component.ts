import { Component, OnInit } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { homeIcons } from '@mocks/icons';
import { learnMore } from '@mocks/learn-more';
import { headerMenu } from '@mocks/menu';
import { sections } from '@mocks/sections';
import { Icon } from '@sharedModels/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 'My Projects';
  sections: AditionalContentSection[] = sections;
  learnMore: LearnMoreIcon[] = learnMore;
  homeIcons: Icon[] = homeIcons;
  title = 'My Projects';

  constructor(private router: Router) {}

  ngOnInit() {}

  updateActiveMenuLink = (option: NavMenuOption) => {
    this.activeHeaderMenuOption = option.label;

    this.router.navigate([option.link]);
  };
}
