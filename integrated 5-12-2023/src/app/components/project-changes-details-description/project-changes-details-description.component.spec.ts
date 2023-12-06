import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangesDetailsDescriptionComponent } from './project-changes-details-description.component';

describe('ProjectChangesDetailsDescriptionComponent', () => {
  let component: ProjectChangesDetailsDescriptionComponent;
  let fixture: ComponentFixture<ProjectChangesDetailsDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectChangesDetailsDescriptionComponent]
    });
    fixture = TestBed.createComponent(ProjectChangesDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
