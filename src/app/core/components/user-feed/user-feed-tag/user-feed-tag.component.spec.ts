import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedTagComponent } from './user-feed-tag.component';

describe('UserFeedTagComponent', () => {
  let component: UserFeedTagComponent;
  let fixture: ComponentFixture<UserFeedTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeedTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
