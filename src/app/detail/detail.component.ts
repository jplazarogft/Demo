import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { DetailService } from './detail.service';
import { detailMenu, headerMenu } from '@mocks/menu';
import { learnMore } from '@mocks/learn-more';
import { sections } from '@mocks/sections';
import { ViewComponent } from './../shared/components/view/view.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent extends ViewComponent implements OnInit {
  activeDetailMenuOption = 'Overview';
  activeHeaderMenuOption = 1;
  headerMenu: NavMenuOption[] = headerMenu;
  detailMenu: NavMenuOption[] = detailMenu;
  learnMore: LearnMoreIcon[] = learnMore;
  sections: AditionalContentSection[] = sections;
  sectionsInfo: Observable<any>;
  headerInfo: Observable<any>;

  constructor(private detailService: DetailService, router: Router) {
    super(router);
  }

  ngOnInit() {
    this.sectionsInfo = this.detailService.getDetailSectionsData();
    this.headerInfo = this.detailService.getDetailHeaderData();
  }

  updateSectionMenuLink = (option: NavMenuOption) => {
    this.activeDetailMenuOption = option.label;
  };
}
