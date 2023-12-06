import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangesDetailstableComponent } from './project-changes-detailstable.component';

describe('ProjectChangesDetailstableComponent', () => {
  let component: ProjectChangesDetailstableComponent;
  let fixture: ComponentFixture<ProjectChangesDetailstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectChangesDetailstableComponent]
    });
    fixture = TestBed.createComponent(ProjectChangesDetailstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
