import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDocumentsAddDocumentDialogComponent } from './projects-documents-add-document-dialog.component';

describe('ProjectsDocumentsAddDocumentDialogComponent', () => {
  let component: ProjectsDocumentsAddDocumentDialogComponent;
  let fixture: ComponentFixture<ProjectsDocumentsAddDocumentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDocumentsAddDocumentDialogComponent]
    });
    fixture = TestBed.createComponent(ProjectsDocumentsAddDocumentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
