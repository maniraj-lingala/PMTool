import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-overview-details-card',
  templateUrl: './projects-overview-details-card.component.html',
  styleUrls: ['./projects-overview-details-card.component.scss']
})
export class ProjectsOverviewDetailsCardComponent {

  
  myprojects = [
    {
      title: 'Project Management Tool',
      subtitle: 'SaaS Project',
      imageSrc: '../../../assets/Images/overviewIcons/ManagmentLogo.png',
      startdate: '12 Jan 23 -',
      enddate: '12 Feb 27',
      projectHealth: {
        percentage: 98,
        imagePath: '../../../assets/Images/overviewIcons/Ellipse-739.png'
      },
      projectLead: {
        name: 'Angel May',
        role: 'Project Manager/Lead',
        imageSrc: '../../../assets/Images/overviewIcons/Managerpic.png'
      },
      progressValue: 100,
      projectDescription: "The project management tool project is a very comprehensive software solution designed to assist teams and organizations in effectively planning, organizing, and executing projects."
    },


  ];

  avatars = [
    { image: '../../../assets/Images/overviewIcons/Avatar-img1.png' },
    { image: '../../../assets/Images/overviewIcons/Avatar-img2.png' },
    { image: '../../../assets/Images/overviewIcons/Avatar-img3.png' },
    { image: '../../../assets/Images/overviewIcons/Avatar-img4.png' },
  ];
}