import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDocumentsService {
  constructor() { }

  private filesSubject = new BehaviorSubject<File[]>([]);
  files$ = this.filesSubject.asObservable();
  updateFiles(files1: File[]) {
    this.filesSubject.next(files1);
  }

  private selectedproject = new BehaviorSubject<string>('');
  selectedproject$ = this.selectedproject.asObservable();
  currentprojectname(name: string) {
    this.selectedproject.next(name);
    console.log(name + "services")
  }
}