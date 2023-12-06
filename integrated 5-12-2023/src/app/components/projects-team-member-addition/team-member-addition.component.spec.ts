import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberAdditionComponent } from './team-member-addition.component';

describe('TeamMemberAdditionComponent', () => {
  let component: TeamMemberAdditionComponent;
  let fixture: ComponentFixture<TeamMemberAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMemberAdditionComponent]
    });
    fixture = TestBed.createComponent(TeamMemberAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
