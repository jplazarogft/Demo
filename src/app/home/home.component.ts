import { HomeService } from './home.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AditionalContentSection } from '@sharedModels/aditional-content-section';
import { LearnMoreIcon } from '@sharedModels/learn-more-icon';
import { NavMenuOption } from '@sharedModels/nav-menu-option';
import { homeIcons } from '@mocks/icons';
import { learnMore } from '@mocks/learn-more';
import { headerMenu } from '@mocks/menu';
import { sections } from '@mocks/sections';
import { Icon } from '@sharedModels/icon';
import { ModalService } from '../shared/components/modal/modal.service';
import { ViewComponent } from './../shared/components/view/view.component';
import { Technology } from '@coreModels/technology';
import { Project } from '@coreModels/project';
import { CreateAppModalComponent } from '../shared/components/create-app-modal/create-app-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ModalService],
})
export class HomeComponent extends ViewComponent implements OnInit, OnDestroy {
  @ViewChild(CreateAppModalComponent, { static: false }) modalRef: CreateAppModalComponent;
  headerMenu: NavMenuOption[] = headerMenu;
  activeHeaderMenuOption = 0;
  sections: AditionalContentSection[] = sections;
  learnMore: LearnMoreIcon[] = learnMore;
  homeIcons: Icon[] = homeIcons;
  appDependencies$: Observable<Project[]> = null;
  technologies$: Observable<Technology[]> = null;
  images$: Observable<string[]> = null;
  navigationTypes: string[] = [];
  subscriptions = new Subscription();

  constructor(
    router: Router,
    private modalService: ModalService,
    private homeService: HomeService,
  ) {
    super(router);
    this.title = 'My projects';
  }

  ngOnInit() {
    this.technologies$ = this.homeService.getTechnologies();
    this.images$ = this.homeService.getImages();
    this.appDependencies$ = this.homeService.getApplicationDependencies();
    this.navigationTypes = this.homeService.navigationTypes;
  }

  showCreateModal = () => this.modalService.toggleVisibility();

  submitCreateAppForm = (form: Project) => {
    this.subscriptions.add(
      this.homeService.sendForm(form).subscribe(
        response => {
          alert(`App created successfully`);
          this.modalService.toggleVisibility();
          this.modalRef.resetForm();
        },
        error => alert(`Something went wrong: ${error.msg}`),
      ),
    );
  };
}
