import {Component, Input, EventEmitter, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';


@Component({
  selector: 'to-do-item',
  templateUrl: './toDoItem.component.html',
  styleUrls: ['./toDoItem.component.css']
})

export class ToDoItemComponent {
  @Input() currentTaskIndex;
  @Input() listOfTasks;

  @Output()
  removed: EventEmitter<ITaskItem> = new EventEmitter<ITaskItem>();

  @Output()
  taskStatusChange: EventEmitter<ITaskItem> = new EventEmitter<ITaskItem>();



  @Input()
  task:ITaskItem;
  @Output()
  taskChange: EventEmitter<ITaskItem> = new EventEmitter<ITaskItem>();


  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('closeIcon', sanitizer.bypassSecurityTrustResourceUrl('./../img/cancel.svg'));
  }

  public removeTask(task: ITaskItem) {
    this.removed.emit(task);
    debugger;
  }


  public taskStatusUpdate() {
    this.taskChange.emit(this.task);
    debugger;
  }

}
