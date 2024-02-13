import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayWellingtonComponent } from './one-way-wellington.component';

describe('OneWayWellingtonComponent', () => {
  let component: OneWayWellingtonComponent;
  let fixture: ComponentFixture<OneWayWellingtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneWayWellingtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneWayWellingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
