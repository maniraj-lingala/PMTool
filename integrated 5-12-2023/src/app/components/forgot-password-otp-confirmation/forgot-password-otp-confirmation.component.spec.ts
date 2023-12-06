import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordOtpConfirmationComponent } from './forgot-password-otp-confirmation.component';

describe('ForgotPasswordOtpConfirmationComponent', () => {
  let component: ForgotPasswordOtpConfirmationComponent;
  let fixture: ComponentFixture<ForgotPasswordOtpConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordOtpConfirmationComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordOtpConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
