import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangesSearchAndAddComponent } from './project-changes-search-and-add.component';

describe('ProjectChangesSearchAndAddComponent', () => {
  let component: ProjectChangesSearchAndAddComponent;
  let fixture: ComponentFixture<ProjectChangesSearchAndAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectChangesSearchAndAddComponent]
    });
    fixture = TestBed.createComponent(ProjectChangesSearchAndAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
