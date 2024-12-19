import { TestBed } from '@angular/core/testing';

import { InitFirebaseService } from './init-firebase.service';

describe('InitFirebaseService', () => {
  let service: InitFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
