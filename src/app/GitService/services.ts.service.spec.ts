import { TestBed } from '@angular/core/testing';

import { Services.TsService } from './services.ts.service';

describe('Services.TsService', () => {
  let service: Services.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
