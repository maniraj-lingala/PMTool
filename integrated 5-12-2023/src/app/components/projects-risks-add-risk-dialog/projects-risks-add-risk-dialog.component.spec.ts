import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRisksAddRiskDialogComponent } from './projects-risks-add-risk-dialog.component';

describe('ProjectsRisksAddRiskDialogComponent', () => {
  let component: ProjectsRisksAddRiskDialogComponent;
  let fixture: ComponentFixture<ProjectsRisksAddRiskDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsRisksAddRiskDialogComponent]
    });
    fixture = TestBed.createComponent(ProjectsRisksAddRiskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
