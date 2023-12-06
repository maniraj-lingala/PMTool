import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  

  projects1 = [
    {
      projectname:'project management tool',
      id:1001,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 98,
      imgSrc: '../../assets/Images/logos/projectimage1.png',
      // progressColor: 'warn',
      title: 'project management tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1002,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage2.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1003,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage3.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1004,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage4.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1005,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage5.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1006,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage1.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1007,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage5.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1008,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage4.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    },
    {
      projectname:'project management tool',
      id:1009,
      teamleadname:'Deepak Kumar Parida',
      progressValue: 100,
      imgSrc: '../../assets/Images/logos/projectimage3.png',
      // progressColor: 'warn',
      title: 'Project Management Tool',
      startdate:'12 Jan 23 -',
      enddate:'12 Feb 24',
      description: 'The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects.',
      manager:'Project Manager/Lead',
      teamleadimage:'../../assets/Images/profile_images/manager-leadimage.png',
      projecttype:'Saas Product'
    }
  ];



  project1Length: number = this.projects1.length;


  private currentViewSubject = new BehaviorSubject<string>('grid'); // Default to grid view
  currentView$ = this.currentViewSubject.asObservable();

  switchToGridView() {
    this.currentViewSubject.next('list');
  }

  switchToListView() {
    
    this.currentViewSubject.next('grid');
  }

  

}
