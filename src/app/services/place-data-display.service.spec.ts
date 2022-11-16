import { TestBed } from '@angular/core/testing';

import { PlaceDataDisplayService } from './place-data-display.service';

describe('PlaceDataDisplayService', () => {
  let service: PlaceDataDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceDataDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
