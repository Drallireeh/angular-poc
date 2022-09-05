import { TestBed } from '@angular/core/testing';

import { LineIdService } from './line-id.service';

describe('LineIdService', () => {
  let service: LineIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
