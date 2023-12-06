import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllProjectListviewComponent } from './project-all-project-listview.component';

describe('ProjectAllProjectListviewComponent', () => {
  let component: ProjectAllProjectListviewComponent;
  let fixture: ComponentFixture<ProjectAllProjectListviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAllProjectListviewComponent]
    });
    fixture = TestBed.createComponent(ProjectAllProjectListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
