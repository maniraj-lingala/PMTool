import { Component } from '@angular/core';

@Component({
  selector: 'app-app-purpose-type',
  templateUrl: './app-purpose-type.component.html'
})
export class AppPurposeTypeComponent {


  usingProManage: any;
  ProManageOptions: string[] = ['For Work', 'For Education', 'For Personal Project'];
}
