import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-otp-confirmation',
  templateUrl: './forgot-password-otp-confirmation.component.html'
})
export class ForgotPasswordOtpConfirmationComponent {
  otpField: FormGroup;

  ngOnInit(): void {
    this.otpField = new FormGroup({
      otp: new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)])
    });
    this.otpField.get('otp').valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}
