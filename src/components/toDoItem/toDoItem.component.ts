import {Component, Input, EventEmitter, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {ITaskItem} from "../toDoList/toDoList.component";

@Component({
  selector: 'to-do-item',
  templateUrl: './toDoItem.component.html',
  styleUrls: ['./toDoItem.component.css']
})

export class ToDoItemComponent {
  @Input() currentTask;

  @Output()
  removed: EventEmitter<ITaskItem> = new EventEmitter<ITaskItem>();

  @Output()
  taskStatusChange: EventEmitter<ITaskItem> = new EventEmitter<ITaskItem>();


  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('closeIcon', sanitizer.bypassSecurityTrustResourceUrl('./../img/cancel.svg'));
  }

  public removeTask(currentTask: ITaskItem) {
    this.removed.emit(currentTask);
    debugger;
  }


  public taskStatusUpdate() {
    this.taskStatusChange.emit();
    debugger;
  }

}
