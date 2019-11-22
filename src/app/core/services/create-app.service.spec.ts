import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CreateAppService } from './create-app.service';

describe('CreateAppService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }),
  );

  it('should be created', () => {
    const service: CreateAppService = TestBed.get(CreateAppService);
    expect(service).toBeTruthy();
  });
});
