import { TestBed } from '@angular/core/testing';

import { SplashScreenStateService } from './splash-screen-state.service';

describe('SplashScreenService', () => {
  let service: SplashScreenStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplashScreenStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
