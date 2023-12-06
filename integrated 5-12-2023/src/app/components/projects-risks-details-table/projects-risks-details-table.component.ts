import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsRisksRiskDetailsDialogComponent } from '../projects-risks-risk-details-dialog/projects-risks-risk-details-dialog.component';
import { ProjectDetailsService } from 'src/app/services/project-details.service';

export interface PeriodicElement {
  Risk: string;
  Category: string;
  Date_Identified: string;
  Target_Date: string;
  Risk_Area: string;
  Impact_Level: string;
  Probability: string;
  Owner: string;
  Status: string;
  Actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Risk: '#2070',
    Category: 'Technical',
    Date_Identified: '23 Nov 2023',
    Target_Date: '23 Nov 2023',
    Risk_Area: '',
    Impact_Level: 'High',
    Probability: 'High',
    Owner: 'Christian Bale',
    Status: 'open',
    Actions: '',
  },
  {
    Risk: '#2071',
    Category: 'Financial',
    Date_Identified: '23 Nov 2023',
    Target_Date: '23 Nov 2023',
    Risk_Area: '',
    Impact_Level: 'Low',
    Probability: 'Low',
    Owner: 'Christian Bale',
    Status: 'closed',
    Actions: '',
  },
  {
    Risk: '#2072',
    Category: 'Physical',
    Date_Identified: '24 Nov 2023',
    Target_Date: '24 Nov 2023',
    Risk_Area: '',
    Impact_Level: 'High',
    Probability: 'High',
    Owner: 'Christian Bale',
    Status: 'on hold',
    Actions: '',
  },
  {
    Risk: '#2073',
    Category: 'Security',
    Date_Identified: '24 Nov 2023',
    Target_Date: '24 Nov 2023',
    Risk_Area: '',
    Impact_Level: 'Medium',
    Probability: 'Medium',
    Owner: 'Christian Bale',
    Status: 'open',
    Actions: '',
  },
];


@Component({
  selector: 'app-projects-risks-details-table',
  templateUrl: './projects-risks-details-table.component.html'
})
export class ProjectsRisksDetailsTableComponent {

  displayedColumns: string[] = ['Risk', 'Category', 'Date_Identified', 'Target_Date','Risk_Area','Impact_Level','Probability','Owner','Status','Actions'];

  dataSource = ELEMENT_DATA;


  constructor(private matDialog:MatDialog, private ser:ProjectDetailsService){}

  openRiskDetails()
  {
    this.matDialog.open(ProjectsRisksRiskDetailsDialogComponent, {
      width: '40%',
      height: '100vh',
      position: { right: '0px' },
    });
  }
}