import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverviewGridItemsComponent } from './projects-overview-grid-items.component';

describe('ProjectsOverviewGridItemsComponent', () => {
  let component: ProjectsOverviewGridItemsComponent;
  let fixture: ComponentFixture<ProjectsOverviewGridItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsOverviewGridItemsComponent]
    });
    fixture = TestBed.createComponent(ProjectsOverviewGridItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
