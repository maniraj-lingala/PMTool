import { Component } from '@angular/core';
import { ProjectDetailsService } from 'src/app/services/project-details.service';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

@Component({
  selector: 'app-project-all-project-cards',
  templateUrl: './project-all-project-cards.component.html',
  styleUrls: ['./project-all-project-cards.component.scss']
})
export class ProjectAllProjectCardsComponent {
  projects :any[];
 
  constructor(private service:ProjectDetailsService,private service1:ProjectsDocumentsService){
    this.projects = this.service.projects1;
    console.log(this.projects)
  }
  

  
  avatars = [
    { image: '../../assets/Images/profile_images/employee1.png' },
    { image:'../../assets/Images/profile_images/employee2.png' },
    { image:'../../assets/Images/profile_images/employee3.png' },
    { image:'../../assets/Images/profile_images/employee4.png' },
    { image:'../../assets/Images/profile_images/employee2.png'},
    { image:'../../assets/Images/profile_images/employee2.png'},
    { image:'../../assets/Images/profile_images/employee2.png'},
    { image:'../../assets/Images/profile_images/employee2.png'},

  ];

  openProject(project:string){
    this.service1.currentprojectname(project);
    console.log(project);
  }
 
}
