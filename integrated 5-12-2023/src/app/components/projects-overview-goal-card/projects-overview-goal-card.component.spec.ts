import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewGoalCardComponent } from './projects-overview-goal-card.component';

describe('ProjectsOverviewGoalCardComponent', () => {
  let component: ProjectsOverviewGoalCardComponent;
  let fixture: ComponentFixture<ProjectsOverviewGoalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsOverviewGoalCardComponent]
    });
    fixture = TestBed.createComponent(ProjectsOverviewGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
