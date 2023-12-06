import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';




export interface ChangesElement {
  ChangeRequestId: any;
  ChangedItem: string;
  ChangedTo: string;
  image: string;
  RequestedBy: any;
  ApprovedDate: any;
  ImpactLevel: string;
  image1: string;
  ChangedBy: any;
  ChangedStatus: string;
  Actions: any;
}

const changes_Data: ChangesElement[] = [
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale ',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'High', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'Completed', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'Low', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'Completed', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'Medium', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'Completed', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'Medium', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'In Progress', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'High', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'Cancelled', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'Low', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'Completed', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'Low', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'In Progress', Actions: ''
  },
  {
    ChangeRequestId: 'IDEM-CR-0002', ChangedItem: 'Create a style guide',
    ChangedTo: 'Create a style guide', image: '../../../assets/Images/profile_images/employee1.png', RequestedBy: 'Christian Bale',
    ApprovedDate: '3 Jan 2023', ImpactLevel: 'High', image1: '../../../assets/Images/profile_images/employee1.png',
    ChangedBy: 'Christian Bale', ChangedStatus: 'Completed', Actions: ''
  }

];

@Component({
  selector: 'app-project-changes-detailstable',
  templateUrl: './project-changes-detailstable.component.html',
  styleUrls: ['./project-changes-detailstable.component.scss']
})
export class ProjectChangesDetailstableComponent {

  colorMap: { [key: string]: string } = {
    'High': '#F03838',
    'Low': '#007ACC',
    'Medium': '#EE9E40',
    'Completed': '#09A57E',
    'In Progress': '#EE9E40',
    'Cancelled': '#F03838',
  };
  getImpactLevelColor(impactLevel: string): string {
    return this.colorMap[impactLevel] || '#000000';
  }

  displayedColumns: any[] = ['ChangeRequestId', 'ChangedItem', 'ChangedTo', 'RequestedBy',
    'ApprovedDate', 'ImpactLevel', 'ChangedBy', 'ChangedStatus',
    'Actions'];
  dataSource = changes_Data;
  matDialog: any;
  constructor(public dialog: MatDialog) { }
}
