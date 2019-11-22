import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionMenuComponent } from 'src/app/shared/components/action-menu/action-menu.component';
import { CreateAppModalComponent } from 'src/app/shared/components/create-app-modal/create-app-modal.component';
import { HomeHeaderComponent } from './home-header.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IconGroupComponent } from 'src/app/shared/components/icon-group/icon-group.component';

describe('HomeHeaderComponent', () => {
  let component: HomeHeaderComponent;
  let fixture: ComponentFixture<HomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        ActionMenuComponent,
        CreateAppModalComponent,
        HomeHeaderComponent,
        ModalComponent,
        IconGroupComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
