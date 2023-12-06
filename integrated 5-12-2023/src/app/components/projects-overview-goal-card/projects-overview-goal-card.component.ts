import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-overview-goal-card',
  templateUrl: './projects-overview-goal-card.component.html',
  styleUrls: ['./projects-overview-goal-card.component.scss']
})
export class ProjectsOverviewGoalCardComponent {
  projectTitle: string = 'Project Goal';
  projectDescription: string = 'Develop and launch User-Friendly and Efficient Project Management Tool';
}
