import { TestBed } from '@angular/core/testing';

import { GstserviceService } from './gstservice.service';

describe('GstserviceService', () => {
  let service: GstserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GstserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
