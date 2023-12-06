import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllSearchheaderComponent } from './project-all-searchheader.component';

describe('ProjectAllSearchheaderComponent', () => {
  let component: ProjectAllSearchheaderComponent;
  let fixture: ComponentFixture<ProjectAllSearchheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAllSearchheaderComponent]
    });
    fixture = TestBed.createComponent(ProjectAllSearchheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
