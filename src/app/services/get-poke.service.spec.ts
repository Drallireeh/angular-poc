import { TestBed } from '@angular/core/testing';

import { GetPokeService } from './get-poke.service';

describe('GetPokeService', () => {
  let service: GetPokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
