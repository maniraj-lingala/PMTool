import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAllProjectCardsComponent } from './project-all-project-cards.component';

describe('ProjectAllProjectCardsComponent', () => {
  let component: ProjectAllProjectCardsComponent;
  let fixture: ComponentFixture<ProjectAllProjectCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAllProjectCardsComponent]
    });
    fixture = TestBed.createComponent(ProjectAllProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
