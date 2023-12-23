import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValocityOnsiteComponent } from './valocity-onsite.component';

describe('ValocityOnsiteComponent', () => {
  let component: ValocityOnsiteComponent;
  let fixture: ComponentFixture<ValocityOnsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValocityOnsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValocityOnsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
