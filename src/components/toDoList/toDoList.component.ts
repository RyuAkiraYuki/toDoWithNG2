import {Component, DoCheck} from '@angular/core';
import {ViewModelController} from '../viewModelController/viewModel.component'

@Component({
  selector: 'to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css']
})

export class ToDoListComponent implements DoCheck {
  // private tasksList: ITaskItem[] = [];
  private tasksList: ViewModelController;
  private newTaskTitle: string;

  constructor() {

    this.newTaskTitle = '';
    this.tasksList = new ViewModelController();

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

  ngDoCheck() {
    this.tasksList.updateStatusCount();
  }

}
