import { TestBed } from '@angular/core/testing';

import { StaticTabService } from './static-tab.service';

describe('StaticTabService', () => {
  let service: StaticTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
