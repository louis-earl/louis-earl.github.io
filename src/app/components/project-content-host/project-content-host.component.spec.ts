import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentHostComponent } from './project-content-host.component';

describe('ProjectContentHostComponent', () => {
  let component: ProjectContentHostComponent;
  let fixture: ComponentFixture<ProjectContentHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContentHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
