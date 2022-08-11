import { TestBed } from '@angular/core/testing';

import { BorderPopupService } from './border-popup.service';

describe('BorderPopupService', () => {
  let service: BorderPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
