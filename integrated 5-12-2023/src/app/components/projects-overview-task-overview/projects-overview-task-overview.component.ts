import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-overview-task-overview',
  templateUrl: './projects-overview-task-overview.component.html',
  styleUrls: ['./projects-overview-task-overview.component.scss']
})
export class ProjectsOverviewTaskOverviewComponent {

  taskTitle1: string = 'New Task';
  taskNumber1: number = 43;
  progressPercentage1: number = 0.46;
  lastWeek1: string = 'Last week';

  taskTitle2: string = 'Completed Tasks';
  taskNumber2: number = 320;
  progressPercentage2: number = 1.16;
  lastWeek2: string = 'Last week';

  taskTitle3: string = 'Pending Tasks';
  taskNumber3: number = 81;
  progressPercentage3: number = 0.35;
  lastWeek3: string = 'Last week';

  taskTitle4: string = 'Inprogress Tasks';
  taskNumber4: number = 33;
  progressPercentage4: number = 3.15;
  lastWeek4: string = 'Last week';
}
