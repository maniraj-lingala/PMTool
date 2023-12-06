import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectDetailsService } from 'src/app/services/project-details.service';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.scss']
})
export class ProjectAllComponent {
  currentView: string;
  private subscription: Subscription;

  constructor(private viewSwitchService: ProjectDetailsService) {
    this.subscription = this.viewSwitchService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
