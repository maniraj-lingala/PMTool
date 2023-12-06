import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewDetailsCardComponent } from './projects-overview-details-card.component';

describe('ProjectsOverviewDetailsCardComponent', () => {
  let component: ProjectsOverviewDetailsCardComponent;
  let fixture: ComponentFixture<ProjectsOverviewDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsOverviewDetailsCardComponent]
    });
    fixture = TestBed.createComponent(ProjectsOverviewDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
