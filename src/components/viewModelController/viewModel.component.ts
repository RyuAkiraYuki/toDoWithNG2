import * as _ from "lodash";

export class ViewModelController {
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
