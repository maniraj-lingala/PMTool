import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsRisksAddRiskDialogComponent } from '../projects-risks-add-risk-dialog/projects-risks-add-risk-dialog.component';

@Component({
  selector: 'app-projects-risks',
  templateUrl: './projects-risks.component.html'
})
export class ProjectsRisksComponent {

  constructor(private matDialog: MatDialog) {}

  openAddRisk() {
    this.matDialog.open(ProjectsRisksAddRiskDialogComponent, {
      width: '40%',
      height: '100vh',
      position: { right: '0px'},
    });
  }
}
