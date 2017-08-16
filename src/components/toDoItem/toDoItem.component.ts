import {Component, Input} from '@angular/core';

@Component({
  selector: 'to-do-item',
  templateUrl: './toDoItem.component.html',
  styleUrls: ['./toDoItem.component.css']
})

export class ToDoItemComponent {
  @Input() currentTask;
}
