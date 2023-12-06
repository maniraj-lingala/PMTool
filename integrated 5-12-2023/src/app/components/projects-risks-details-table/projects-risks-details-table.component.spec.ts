import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRisksDetailsTableComponent } from './projects-risks-details-table.component';

describe('ProjectsRisksDetailsTableComponent', () => {
  let component: ProjectsRisksDetailsTableComponent;
  let fixture: ComponentFixture<ProjectsRisksDetailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsRisksDetailsTableComponent]
    });
    fixture = TestBed.createComponent(ProjectsRisksDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
