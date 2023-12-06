import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamMemberAdditionComponent } from '../projects-team-member-addition/team-member-addition.component';
import { TeamMemberProfileComponent } from '../projects-team-member-profile/team-member-profile.component';

const ELEMENT_DATA = [
  { Task_Pending: 5, Task_Assigned: 15, Task_Completed: 10 },
];

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html'
})
export class TeamMembersComponent {

  constructor(private dialog: MatDialog) { }

  memberslist = [
    {
      name: 'Lucy Hales',
      empId: 2046,
      designation: 'UI/UX Designer',
      status: 'Available',
      image: "/assets/Images/profile_images/userprofile.png",
      assigned: 16,
      pending: 6,
      completed: 10,
    },
    {
      name: 'Mary',
      empId: 2010,
      designation: 'Dotnet Developer',
      status: 'Available',
      image: "/assets/Images/profile_images/userprofile.png",
      assigned: 20,
      pending: 4,
      completed: 16,
    },
    {
      name: 'Abhishek',
      empId: 2050,
      designation: 'Angular Developer',
      status: 'Available',
      image: "/assets/Images/profile_images/userprofile.png",
      assigned: 5,
      pending: 2,
      completed: 3,
    },
    // {
    //   name: 'Akshay',
    //   empId: 2078,
    //   designation: 'Automation Tester',
    //   status: 'Unavailable',
    //   image: "/assets/member4.jpg",
    //   assigned: 10,
    //   pending: 6,
    //   completed: 4,
    // },
    // {
    //   name: 'Ashish',
    //   empId: 1994,
    //   designation: 'Project Manager',
    //   status: 'Available',
    //   image: "/assets/member5.jpg",
    //   assigned: 12,
    //   pending: 3,
    //   completed: 9,
    // },
    // {
    //   name: 'Uday',
    //   empId: 2145,
    //   designation: 'Scrum Master',
    //   status: 'Unvailable',
    //   image: "/assets/member6.jpg",
    //   assigned: 20,
    //   pending: 2,
    //   completed: 18,
    // },
  ]

  // Tasks Column Headings
  displayedColumns: string[] = ['Task_Assigned', 'Task_Pending', 'Task_Completed'];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(TeamMemberAdditionComponent, {
      width: '50%',
      height: '100vh',
      position: { "right": "0px" }
    })
  }

  openProfileDialog() {
    this.dialog.open(TeamMemberProfileComponent, {
      width: '50%',
      height: '100vh',
      position: { "right": "0px" }
    })
  }
}
