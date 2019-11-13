import { ComponentProperty } from '@sharedModels/component-property';
import { Component, OnInit } from '@angular/core';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { Icon } from '@sharedModels/icon';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { DetailService } from './detail.service';
import { detailIcons } from '@mocks/icons';
import { detailMenu, headerMenu } from '@mocks/menu';
import { learnMore } from '@mocks/learn-more';
import { sections } from '@mocks/sections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  activeDetailMenuOption = 'Overview';
  activeHeaderMenuOption = 'Catalogue';
  headerMenu: NavMenuOption[] = headerMenu;
  detailMenu: NavMenuOption[] = detailMenu;
  icons: Icon[] = detailIcons;
  iconClass = 'chart-pie';
  learnMore: LearnMoreIcon[] = learnMore;
  overviewURL = 'https://stackblitz.com/edit/embed?embed=1&file=app/app.component.ts';
  sections: AditionalContentSection[] = sections;
  title = 'Android.name.component.button.call';
  sectionsInfo: Observable<any>;
  headerInfo: Observable<any>;

  constructor(private detailService: DetailService) {}

  ngOnInit() {
    this.sectionsInfo = this.detailService.getDetailSectionsData();
    this.headerInfo = this.detailService.getDetailHeaderData();
  }

  updateActiveMenuLink = (option: NavMenuOption) => {
    this.activeHeaderMenuOption = option.label;
  };

  updateSectionMenuLink = (option: NavMenuOption) => {
    this.activeDetailMenuOption = option.label;
  };
}
