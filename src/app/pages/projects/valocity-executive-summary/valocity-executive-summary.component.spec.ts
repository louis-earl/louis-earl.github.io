import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValocityExecutiveSummaryComponent } from './valocity-executive-summary.component';

describe('ValocityExecutiveSummaryComponent', () => {
  let component: ValocityExecutiveSummaryComponent;
  let fixture: ComponentFixture<ValocityExecutiveSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ValocityExecutiveSummaryComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValocityExecutiveSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
