import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { IconGroupComponent } from '../shared/components/icon-group/icon-group.component';
import { NavMenuComponent } from '../shared/components/nav-menu/nav-menu.component';
import { PageMenuComponent } from '../shared/components/page-menu/page-menu.component';
import { SearchInputComponent } from '../shared/components/search-input/search-input.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailComponent,
        DetailHeaderComponent,
        IconGroupComponent,
        NavMenuComponent,
        PageMenuComponent,
        SearchInputComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
