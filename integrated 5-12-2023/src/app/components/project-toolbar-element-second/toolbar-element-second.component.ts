import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetailsService } from 'src/app/services/project-details.service';

@Component({
  selector: 'app-toolbar-element-second',
  templateUrl: './toolbar-element-second.component.html',
  styleUrls: ['./toolbar-element-second.component.scss']
})
export class ToolbarElementSecondComponent {

 
    projectListLength!:number;
    constructor(private pmservice: ProjectDetailsService,private router:Router){
    }
    ngOnInit(): void {
      this.projectListLength=this.pmservice.project1Length
    }
    
    switchToListView(){
      this.pmservice.switchToGridView();
}
switchToGridView(){

  this.pmservice.switchToListView();
}

    
    

}


// switchToListView(){
//   this.pmservice.switchToListViews();
// }
// switchToGridView(){
//   this.pmservice.switchToGridViews();
// }