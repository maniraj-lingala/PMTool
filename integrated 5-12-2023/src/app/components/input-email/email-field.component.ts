import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
})
export class EmailFieldComponent implements OnInit {
  emailField: FormGroup;
  @Input() label: string;
  @Input() placeholder: string;

  ngOnInit(): void {
    this.emailField = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@jnettechnologies+\.[a-zA-Z]{2,}')])
    });
    this.emailField.get('email').valueChanges.subscribe(value => {
      console.log(value);
    });
  }

}
