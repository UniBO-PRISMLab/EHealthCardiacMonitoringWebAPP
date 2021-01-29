import { TestBed } from '@angular/core/testing';

import { MedGuard } from './med.guard';

describe('MedGuard', () => {
  let guard: MedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
