import { TestBed } from '@angular/core/testing';

import { CourtsService } from './courts.service';

describe('CourtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourtsService = TestBed.get(CourtsService);
    expect(service).toBeTruthy();
  });
});
