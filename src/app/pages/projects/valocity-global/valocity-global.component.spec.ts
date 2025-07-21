import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValocityGlobalComponent } from './valocity-global.component';

describe('ValocityGlobalComponent', () => {
  let component: ValocityGlobalComponent;
  let fixture: ComponentFixture<ValocityGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ValocityGlobalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValocityGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
