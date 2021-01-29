import { TestBed } from '@angular/core/testing';

import { InfGuard } from './inf.guard';

describe('InfGuard', () => {
  let guard: InfGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InfGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
