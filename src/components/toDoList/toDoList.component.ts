import {Component} from '@angular/core';

import * as _ from "lodash";

declare interface ITaskItem {
  id: number;
  name: string;
  isDone: boolean;
}

@Component({
  selector: 'to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})
export class ToDoListComponent {
  private tasksList: ITaskItem[] = [];
  private newTaskTitle: string;

  constructor() {

    this.newTaskTitle = '';

    this.tasksList.push({
      id: 0,
      name: 'Create To Do App with Angualr 1',
      isDone: true
    });
    this.tasksList.push({
      id: 1,
      name: 'Implement MVC pattern with Python',
      isDone: false
    });

    this.tasksList.push({
      id: 2,
      name: 'Implement MVC pattern with Node.js',
      isDone: false
    });
  }

  public addTask() {
    if (this.newTaskTitle && this.newTaskTitle.length > 0) {

      this.tasksList.push({
        id: this.tasksList.length,
        name: this.newTaskTitle,
        isDone: false
      });

      this.newTaskTitle = '';
    }
  }

  public removeTask(taskId: number) {
    console.log(taskId)
    _.remove(this.tasksList, (task) => {
      return task.id != taskId;
    });
  }

}
