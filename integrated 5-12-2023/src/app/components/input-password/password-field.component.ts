import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
})
export class PasswordFieldComponent implements OnInit {
  passwordField: FormGroup;

  ngOnInit(): void {
    this.passwordField = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)])
    });
    this.passwordField.get('password').valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}