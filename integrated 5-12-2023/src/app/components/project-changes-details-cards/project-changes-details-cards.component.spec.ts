import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChangesDetailsCardsComponent } from './project-changes-details-cards.component';

describe('ProjectChangesDetailsCardsComponent', () => {
  let component: ProjectChangesDetailsCardsComponent;
  let fixture: ComponentFixture<ProjectChangesDetailsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectChangesDetailsCardsComponent]
    });
    fixture = TestBed.createComponent(ProjectChangesDetailsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
