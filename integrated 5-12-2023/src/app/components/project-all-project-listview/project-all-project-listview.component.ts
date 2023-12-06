import { Component } from '@angular/core';
import { ProjectDetailsService } from 'src/app/services/project-details.service';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

@Component({
  selector: 'app-project-all-project-listview',
  templateUrl: './project-all-project-listview.component.html',
  styleUrls: ['./project-all-project-listview.component.scss']
})
export class ProjectAllProjectListviewComponent {
  projects :any[];
 
  // constructor(private service:ProjectDetailsService){
  //   this.projects = this.service.projects1;
  //   console.log(this.projects)
  // }

  constructor(private service:ProjectDetailsService,private service1:ProjectsDocumentsService){
    this.projects = this.service.projects1;
    console.log(this.projects)
  }

  selectAll: boolean = false;

  selectAllRows() {
    for (const project of this.projects) {
      project.selected = this.selectAll;
    }
  }

  editItem() {
    // Implement logic for the "Edit" action
    console.log('Edit clicked');
  }

  deleteItem(project: any) {
    // Implement logic for the "Delete" action
    console.log('Delete clicked for project:', project);
  
    // Find the index of the project in the projects1 array
    const index = this.projects.findIndex(p => p.id === project.id);
  
    // Remove the project from the array if found
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }
  viewItem(){
    console.log('view is clicked');
  }

  openProject(project:string){
    this.service1.currentprojectname(project);
    console.log(project);
  }
}
