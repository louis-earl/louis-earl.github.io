import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageScrollerContainerComponent } from './image-scroller-container.component';

describe('ImageScrollerContainerComponent', () => {
  let component: ImageScrollerContainerComponent;
  let fixture: ComponentFixture<ImageScrollerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageScrollerContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageScrollerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
