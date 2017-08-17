import {Component} from '@angular/core';

declare interface ITaskItem {
  Name: string;
  isDone: boolean;

}

@Component({
  selector: 'to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})
export class ToDoListComponent {
  private tasksList: ITaskItem[] = [];
  private newTask: string;

  constructor() {

    this.newTask = '';

    this.tasksList.push({
      Name: 'Create To Do App with Angualr 1',
      isDone: true
    });
    this.tasksList.push({
      Name: 'Implement MVC pattern with Python',
      isDone: false
    });

    this.tasksList.push({
      Name: 'Implement MVC pattern with Node.js',
      isDone: false
    });
  }

  public addTask() {
    if (this.newTask && this.newTask.length > 0) {
      this.tasksList.push({
        Name: this.newTask,
        isDone: false
      });

      this.newTask = '';
    }
  }

  public removeTask() {

  }

}
