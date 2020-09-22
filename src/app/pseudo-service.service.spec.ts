import { TestBed } from '@angular/core/testing';

import { PseudoServiceService } from './pseudo-service.service';

describe('PseudoServiceService', () => {
  let service: PseudoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PseudoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
