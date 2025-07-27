import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValocityDashboardComponent } from './valocity-dashboard.component';

describe('ValocityDashboardComponent', () => {
  let component: ValocityDashboardComponent;
  let fixture: ComponentFixture<ValocityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValocityDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValocityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
