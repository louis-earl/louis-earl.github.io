import { TestBed } from '@angular/core/testing';

import { ImageScrollerService } from './image-scroller.service';

describe('ImageScrollerService', () => {
  let service: ImageScrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageScrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
