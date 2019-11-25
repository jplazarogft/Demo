import { HomeService } from './home.service';
import { Observable } from 'rxjs';
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
import { ModalService } from '../shared/components/modal/modal.service';
import { Technology } from '@coreModels/technology';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ModalService],
})
export class HomeComponent implements OnInit {
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 'My Projects';
  sections: AditionalContentSection[] = sections;
  learnMore: LearnMoreIcon[] = learnMore;
  homeIcons: Icon[] = homeIcons;
  title = 'My Projects';
  technologies$: Observable<Technology> = null;
  images$: Observable<string[]> = null;
  navigationTypes: string[] = [];

  constructor(
    private router: Router,
    private modalService: ModalService,
    private homeService: HomeService,
  ) {}

  ngOnInit() {
    this.technologies$ = this.homeService.getTechnologies();
    this.images$ = this.homeService.getImages();
    this.navigationTypes = this.homeService.navigationTypes;
  }

  showCreateModal = () => this.modalService.toggleVisibility();

  submitCreateAppForm = form =>
    this.homeService.sendForm(form).subscribe(
      response => alert(response),
      error => alert(error.msg),
    );

  updateActiveMenuLink = (option: NavMenuOption) => {
    this.activeHeaderMenuOption = option.label;
    this.router.navigate([option.link]);
  };
}
