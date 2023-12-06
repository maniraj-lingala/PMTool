import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewTaskOverviewComponent } from './projects-overview-task-overview.component';

describe('ProjectsOverviewTaskOverviewComponent', () => {
  let component: ProjectsOverviewTaskOverviewComponent;
  let fixture: ComponentFixture<ProjectsOverviewTaskOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsOverviewTaskOverviewComponent]
    });
    fixture = TestBed.createComponent(ProjectsOverviewTaskOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
