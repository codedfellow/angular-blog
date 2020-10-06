import { TestBed } from '@angular/core/testing';

import { EditPostGuardGuard } from './edit-post-guard.guard';

describe('EditPostGuardGuard', () => {
  let guard: EditPostGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditPostGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
