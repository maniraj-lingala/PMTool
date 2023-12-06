import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangesAddChangesDialogComponent } from './project-changes-add-changes-dialog.component';

describe('ProjectChangesAddChangesDialogComponent', () => {
  let component: ProjectChangesAddChangesDialogComponent;
  let fixture: ComponentFixture<ProjectChangesAddChangesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectChangesAddChangesDialogComponent]
    });
    fixture = TestBed.createComponent(ProjectChangesAddChangesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
