import { Component } from '@angular/core';

@Component({
  selector: 'app-app-purpose-details',
  templateUrl: './app-purpose-details.component.html'
})
export class AppPurposeDetailsComponent {

  usingProManage: any;
  ProManageOptions: string[] = ['For Work', 'For Education', 'For Personal Project'];
}
