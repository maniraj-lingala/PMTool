import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]'
})

export class DocumentsDragAndDropDirective {

  @Output() private filesChangeEmiter : EventEmitter<File> = new EventEmitter();
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    debugger;
    let files = evt.dataTransfer.files;
    let valid_files : File = files;
    this.filesChangeEmiter.emit(valid_files);
  }
}