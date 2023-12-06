import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllComponent } from './project-all.component';

describe('ProjectAllComponent', () => {
  let component: ProjectAllComponent;
  let fixture: ComponentFixture<ProjectAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAllComponent]
    });
    fixture = TestBed.createComponent(ProjectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
