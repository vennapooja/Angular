import { TestBed } from '@angular/core/testing';

import { TouristPlaceService } from './tourist-place.service';

describe('TouristPlaceService', () => {
  let service: TouristPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
