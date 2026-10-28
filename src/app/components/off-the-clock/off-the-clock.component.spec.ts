import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTheClockComponent } from './off-the-clock.component';

describe('OffTheClockComponent', () => {
  let component: OffTheClockComponent;
  let fixture: ComponentFixture<OffTheClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffTheClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffTheClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
