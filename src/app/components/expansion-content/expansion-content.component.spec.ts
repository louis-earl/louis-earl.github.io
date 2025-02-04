import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionContentComponent } from './expansion-content.component';

describe('ExpansionContentComponent', () => {
  let component: ExpansionContentComponent;
  let fixture: ComponentFixture<ExpansionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
