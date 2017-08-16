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

  constructor() {
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

  }

  public removeTask() {

  }

}
