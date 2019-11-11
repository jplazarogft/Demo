import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from '../shared/components/accordion/accordion.component';
import { AditionalContentComponent } from '../shared/components/aditional-content/aditional-content.component';
import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';
import { HomeHeadingComponent } from './home-heading/home-heading.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { LearnMoreComponent } from '../shared/components/learn-more/learn-more.component';
import { LearnMoreIconComponent } from '../shared/components/learn-more/learn-more-icon/learn-more-icon.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { SearchInputComponent } from '../shared/components/search-input/search-input.component';
import { TableComponent } from '../shared/components/table/table.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        AditionalContentComponent,
        HomeComponent,
        HomeFiltersComponent,
        HomeHeadingComponent,
        HomeMenuComponent,
        LearnMoreComponent,
        LearnMoreIconComponent,
        NavMenuComponent,
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
