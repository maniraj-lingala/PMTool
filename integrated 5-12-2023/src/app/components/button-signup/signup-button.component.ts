import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
})
export class SignupButtonComponent {
  isLoading = false;

  constructor(private router: Router) { }

  onSubmitClick(event: any) {
    this.isLoading = true;
    event.target.innerText = "Checking For Email...";

    this.router.navigate(['/checkInBoxToLogin']);
  }
}
