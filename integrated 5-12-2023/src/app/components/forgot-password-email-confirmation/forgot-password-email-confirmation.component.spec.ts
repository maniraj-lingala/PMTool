import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordEmailConfirmationComponent } from './forgot-password-email-confirmation.component';

describe('ForgotPasswordEmailConfirmationComponent', () => {
  let component: ForgotPasswordEmailConfirmationComponent;
  let fixture: ComponentFixture<ForgotPasswordEmailConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordEmailConfirmationComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordEmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
