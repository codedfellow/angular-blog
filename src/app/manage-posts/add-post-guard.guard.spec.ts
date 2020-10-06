import { TestBed } from '@angular/core/testing';

import { AddPostGuardGuard } from './add-post-guard.guard';

describe('AddPostGuardGuard', () => {
  let guard: AddPostGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddPostGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
