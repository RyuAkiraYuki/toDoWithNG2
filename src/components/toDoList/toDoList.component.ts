import {Component} from '@angular/core';

import * as _ from "lodash";

export interface ITaskItem {
  id: number;
  name: string;
  isDone: boolean;
}

export class TaskList {
  private items: ITaskItem[];
  private doneItems: number;
  private pendingItems: number;

  constructor() {
    this.items = [];
    this.doneItems = 0;
    this.pendingItems = 0;
  }

  public get Length(): number {
    return this.items.length;
  }

  public updateStatusCount() {
    this.doneItems = _.countBy(this.items, 'isDone')['true'];
    this.pendingItems = _.countBy(this.items, 'isDone')['false'];
    debugger;
  }

  public push(task: ITaskItem): void {
    this.items.push(task)
    if (task.isDone) {
      this.doneItems++;
    } else {
      this.pendingItems++;
    }
  }

  public remove(currentTask: ITaskItem): void {
    _.remove(this.items, (task) => {
      return task == currentTask;
    });
    if (currentTask.isDone) {
      this.doneItems--;
    } else {
      this.pendingItems--;
    }
  }
}

@Component({
  selector: 'to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})
export class ToDoListComponent {
  // private tasksList: ITaskItem[] = [];
  private tasksList: TaskList;
  private newTaskTitle: string;

  constructor() {

    this.newTaskTitle = '';
    this.tasksList = new TaskList();

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
        id: this.tasksList.Length,
        name: this.newTaskTitle,
        isDone: false
      });

      this.newTaskTitle = '';
    }
  }

  public removeTask(currentTask: ITaskItem) {
    this.tasksList.remove(currentTask);
  }

  public taskUpdate() {
    this.tasksList.updateStatusCount();
  }

}
