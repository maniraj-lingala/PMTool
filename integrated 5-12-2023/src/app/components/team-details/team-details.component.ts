import { Component } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html'
})
export class TeamDetailsComponent {
  viewLess = true;

  toggleComponent() {
    this.viewLess = !this.viewLess;
    console.log(this.viewLess);
  }
}
