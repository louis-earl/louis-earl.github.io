import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsometricCardsComponent } from './isometric-cards.component';

describe('IsometricCardsComponent', () => {
  let component: IsometricCardsComponent;
  let fixture: ComponentFixture<IsometricCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsometricCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsometricCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
