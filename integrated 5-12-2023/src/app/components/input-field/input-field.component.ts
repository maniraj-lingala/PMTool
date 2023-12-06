import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html'
})
export class InputFieldComponent {
  @Input() label: string;
  @Input() placeholder: string;
}
