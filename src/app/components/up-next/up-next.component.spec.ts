import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpNextComponent } from './up-next.component';

describe('UpNextComponent', () => {
  let component: UpNextComponent;
  let fixture: ComponentFixture<UpNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
