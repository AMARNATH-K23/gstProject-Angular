import { TestBed } from '@angular/core/testing';

import { TokeninterseptorService } from './tokeninterseptor.service';

describe('TokeninterseptorService', () => {
  let service: TokeninterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeninterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
