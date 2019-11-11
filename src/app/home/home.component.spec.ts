import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from '../shared/components/accordion/accordion.component';
import { AditionalContentComponent } from '../shared/components/aditional-content/aditional-content.component';
import { ActionMenuComponent } from '../shared/components/action-menu/action-menu.component';
import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { IconGroupComponent } from '../shared/components/icon-group/icon-group.component';
import { LearnMoreComponent } from '../shared/components/learn-more/learn-more.component';
import { LearnMoreIconComponent } from '../shared/components/learn-more/learn-more-icon/learn-more-icon.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { PageMenuComponent } from '../shared/components/page-menu/page-menu.component';
import { SearchInputComponent } from '../shared/components/search-input/search-input.component';
import { TableComponent } from '../shared/components/table/table.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        ActionMenuComponent,
        AditionalContentComponent,
        HomeComponent,
        HomeFiltersComponent,
        HomeHeaderComponent,
        IconGroupComponent,
        LearnMoreComponent,
        LearnMoreIconComponent,
        NavMenuComponent,
        PageMenuComponent,
        SearchInputComponent,
        TableComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
