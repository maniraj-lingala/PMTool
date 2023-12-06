import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRisksRiskDetailsDialogComponent } from './projects-risks-risk-details-dialog.component';

describe('ProjectsRisksRiskDetailsDialogComponent', () => {
  let component: ProjectsRisksRiskDetailsDialogComponent;
  let fixture: ComponentFixture<ProjectsRisksRiskDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsRisksRiskDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(ProjectsRisksRiskDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
