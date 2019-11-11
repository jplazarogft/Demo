import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMenuComponent } from 'src/app/shared/components/action-menu/action-menu.component';
import { HomeHeadingComponent } from './home-heading.component';
import { IconGroupComponent } from 'src/app/shared/components/icon-group/icon-group.component';

describe('HomeHeadingComponent', () => {
  let component: HomeHeadingComponent;
  let fixture: ComponentFixture<HomeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionMenuComponent, HomeHeadingComponent, IconGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
