import { TestBed } from '@angular/core/testing';

import { AuthenticatedService } from './authenticate.service';

describe('AuthenticateService', () => {
  let service: AuthenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
