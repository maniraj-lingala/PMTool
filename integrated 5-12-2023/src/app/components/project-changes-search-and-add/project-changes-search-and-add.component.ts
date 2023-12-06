import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectChangesAddChangesDialogComponent } from '../project-changes-add-changes-dialog/project-changes-add-changes-dialog.component';

@Component({
  selector: 'app-project-changes-search-and-add',
  templateUrl: './project-changes-search-and-add.component.html'
})
export class ProjectChangesSearchAndAddComponent {

 
  constructor(public dialog1: MatDialog) { }
  openDialog() {
    const dialog = this.dialog1.open(ProjectChangesAddChangesDialogComponent,
      {
        // adding height and width to dialog 
        width: '640px',
        height: '100vh',
        position: { "right": "0px" }
      });
  }

}
