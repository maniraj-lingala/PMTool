import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinboxToLoginComponent } from './checkinbox-to-login.component';

describe('CheckinboxToLoginComponent', () => {
  let component: CheckinboxToLoginComponent;
  let fixture: ComponentFixture<CheckinboxToLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinboxToLoginComponent]
    });
    fixture = TestBed.createComponent(CheckinboxToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
