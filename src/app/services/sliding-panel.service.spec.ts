import { TestBed } from '@angular/core/testing';

import { SlidingPanelService } from './sliding-panel.service';

describe('SlidingPanelService', () => {
  let service: SlidingPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidingPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
