import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRisksComponent } from './projects-risks.component';

describe('ProjectsRisksComponent', () => {
  let component: ProjectsRisksComponent;
  let fixture: ComponentFixture<ProjectsRisksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsRisksComponent]
    });
    fixture = TestBed.createComponent(ProjectsRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
