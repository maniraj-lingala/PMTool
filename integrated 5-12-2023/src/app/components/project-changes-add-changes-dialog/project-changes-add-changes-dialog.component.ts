import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectChangesDetailsComponent } from '../project-changes-details/project-changes-details.component';

@Component({
  selector: 'app-project-changes-add-changes-dialog',
  templateUrl: './project-changes-add-changes-dialog.component.html',
  styleUrls: ['./project-changes-add-changes-dialog.component.scss']
})
export class ProjectChangesAddChangesDialogComponent {

  selectedDate: Date | undefined; 
  constructor(public dialog: MatDialog) {
   }
  // new dialog 

  OpenChange() {
    const dialog = this.dialog.open(ProjectChangesDetailsComponent,
      {
        // adding height and width to dialog 
        width: '1448px',
        height: '1080px ',
        position: { "right": "0px" }
      });

    dialog.afterClosed().subscribe((data: any) => {
      console.log(`Dialog result: ${data}`);
    });
  }
}
