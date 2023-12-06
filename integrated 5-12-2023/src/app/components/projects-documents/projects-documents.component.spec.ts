import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDocumentsComponent } from './projects-documents.component';

describe('ProjectsDocumentsComponent', () => {
  let component: ProjectsDocumentsComponent;
  let fixture: ComponentFixture<ProjectsDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDocumentsComponent]
    });
    fixture = TestBed.createComponent(ProjectsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
