import { Component } from '@angular/core';

@Component({
  selector: 'app-team-member-profile',
  templateUrl: './team-member-profile.component.html'
})
export class TeamMemberProfileComponent {
  memberslist =
    {
      name: 'Lucy Hales',
      empId: 2046,
      designation: 'Full Stack Developer',
      status: 'Available',
      image: "/assets/Images/profile_images/employee1.png",
      assigned: 15,
      pending: 2,
      completed: 8,
      address: "california USA",
      qualification: "BTech"
    }

  value = Math.ceil((this.memberslist.completed / this.memberslist.assigned) * 100);

}
