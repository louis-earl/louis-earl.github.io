import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnightMysteriesComponent } from './midnight-mysteries.component';

describe('MidnightMysteriesComponent', () => {
  let component: MidnightMysteriesComponent;
  let fixture: ComponentFixture<MidnightMysteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidnightMysteriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidnightMysteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
