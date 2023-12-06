import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangesDetailsComponent } from './project-changes-details.component';

describe('ProjectChangesDetailsComponent', () => {
  let component: ProjectChangesDetailsComponent;
  let fixture: ComponentFixture<ProjectChangesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectChangesDetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectChangesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
