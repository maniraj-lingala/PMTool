import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProjectAllProjectCardsComponent } from '../project-all-project-cards/project-all-project-cards.component';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit{
  componentSelected: string = "projects"

  constructor(public select:ProjectsDocumentsService){
    
  }



  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  selectComponent(component: string): void {
    this.componentSelected = component;
  }
  ngOnInit(): void {
    this.select.selectedproject$.subscribe((res)=>{
      this.componentSelected = res;

    })
  }

  // ngOnChanges(): void {
  //   this.componentSelected = this.select.selectedproject$;
  //   console.log(this.componentSelected+"dfghj");
  //   console.log(this.select.selectedproject)
  // }
}
