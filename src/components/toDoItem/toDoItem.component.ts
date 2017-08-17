import {Component, Input, EventEmitter, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'to-do-item',
  templateUrl: './toDoItem.component.html',
  styleUrls: ['./toDoItem.component.css']
})

export class ToDoItemComponent {
  @Input() currentTask;

  @Output()
  removed: EventEmitter<number> = new EventEmitter();

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('closeIcon', sanitizer.bypassSecurityTrustResourceUrl('./../img/cancel.svg'));
  }

  public removeTask(taskId: number) {
    this.removed.emit(taskId);
  }

}
