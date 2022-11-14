import { TestBed } from '@angular/core/testing';

import { RegistorGuard } from './registor.guard';

describe('RegistorGuard', () => {
  let guard: RegistorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
