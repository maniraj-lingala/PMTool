import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

@Component({
  selector: 'app-projects-documents-add-document-dialog',
  templateUrl: './projects-documents-add-document-dialog.component.html'
})
export class ProjectsDocumentsAddDocumentDialogComponent {

  files: any[] = [];
  public file: File[];
  fileName: string;
  fileType: string;
  image: any;
  
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private documentService: ProjectsDocumentsService) { }
  // data transfering to service class
  ngOnInit() {
    this.documentService.updateFiles(this.files);
  }
  // document drag and drop function
  onFileChange(pFileList: any) {
    this.file = Object.keys(pFileList).map(key => {
      this.fileName = pFileList[key].name.toLowerCase();
      if (this.fileName.endsWith('.pdf')) {
        this.fileType = 'pdf';
        this.image = '../../../assets/Images/icons/pdf.png';
      } else if (this.fileName.endsWith('.doc') || this.fileName.endsWith('.docx')) {
        this.fileType = 'word';
        this.image = '../../../assets/Images/icons/word.png';
      } else if (this.fileName.endsWith('.xlsx')) {
        this.fileType = 'excel';
        this.image = '../../../assets/Images/icons/excel.png';
      }
      else {
        this.fileType = null;
        this.image = null;
      }
      console.log(this.fileName);
      return pFileList[key]
    });
    this.files.push({ image: this.image, file: this.file[0] });
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });
  }
  // document uplaod fuction
  onFileChangeOver(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedFiles = inputElement.files;
    this.file = Object.keys(selectedFiles).map(key => {
      console.log(selectedFiles[key]);
      this.fileName = selectedFiles[key].name.toLowerCase();
      if (this.fileName.endsWith('.pdf')) {
        this.fileType = 'pdf';
        this.image = '../../../assets/Images/icons/pdf.png';
      } else if (this.fileName.endsWith('.doc') || this.fileName.endsWith('.docx')) {
        this.fileType = 'word';
        this.image = '../../../assets/Images/icons/word.png';
      } else if (this.fileName.endsWith('.xlsx')) {
        this.fileType = 'excel';
        this.image = '../../../assets/Images/icons/excel.png';
      } else {
        this.fileType = null;
        this.image = null;
      }
      console.log(this.fileName);
      return selectedFiles[key]
    });
    this.files.push({ image: this.image, file: this.file[0] });
    console.log(this.files);
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });
  }
}