import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html'
})
export class SubmitButtonComponent {
  @Input() routerLink: string;
  isLoading = false;

  constructor(private router: Router) { }

  onSubmitClick(event: any) {
    this.isLoading = true;
    event.target.innerText = "Checking For Email...";
    // this.router.navigate(['/checkInBoxToLogin']);
  }
}
