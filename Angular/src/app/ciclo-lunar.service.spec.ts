import { TestBed } from '@angular/core/testing';

import { CicloLunarService } from './ciclo-lunar.service';

describe('CicloLunarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CicloLunarService = TestBed.get(CicloLunarService);
    expect(service).toBeTruthy();
  });
});
