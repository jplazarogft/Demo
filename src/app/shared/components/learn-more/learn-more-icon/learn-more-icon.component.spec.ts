import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreIconComponent } from './learn-more-icon.component';

describe('LearnMoreIconComponent', () => {
  let component: LearnMoreIconComponent;
  let fixture: ComponentFixture<LearnMoreIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
