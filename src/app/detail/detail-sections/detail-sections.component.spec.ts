import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSectionsComponent } from './detail-sections.component';

describe('DetailSectionsComponent', () => {
  let component: DetailSectionsComponent;
  let fixture: ComponentFixture<DetailSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
