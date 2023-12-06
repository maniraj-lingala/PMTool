import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewTimelineComponent } from './projects-overview-timeline.component';

describe('ProjectsOverviewTimelineComponent', () => {
  let component: ProjectsOverviewTimelineComponent;
  let fixture: ComponentFixture<ProjectsOverviewTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsOverviewTimelineComponent]
    });
    fixture = TestBed.createComponent(ProjectsOverviewTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
