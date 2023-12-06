import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsDocumentsAddDocumentDialogComponent } from '../projects-documents-add-document-dialog/projects-documents-add-document-dialog.component';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions: 'asdf' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', actions: 'asdf' },

];

@Component({
  selector: 'app-projects-documents',
  templateUrl: './projects-documents.component.html'
})
export class ProjectsDocumentsComponent {
  constructor(private file: ProjectsDocumentsService, private matDialog: MatDialog) { }

  documentsFiles: any;
  // accessing the data from services 
  ngOnInit(): void {
    this.documentsFiles = this.file.files$;
    console.log(this.documentsFiles + "sdfghj")
  }
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = ELEMENT_DATA;
  // to open add document dialog component
  openDialog() {
    this.matDialog.open(ProjectsDocumentsAddDocumentDialogComponent
      , {
        width: '50%',
        height: '100vh',
        position: { "right": "0px" }
      })
  }
}
