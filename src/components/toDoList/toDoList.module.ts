import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToDoItemModule} from '../toDoItem/toDoItem.module';
import {MdInputModule, MdButtonModule} from '@angular/material';

import {ToDoListComponent} from './toDoList.component';

@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ToDoItemModule, MdInputModule, MdButtonModule
  ],
  exports: [ToDoListComponent],
  providers: []
})
export class ToDoListModule {
}
