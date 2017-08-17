import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToDoItemModule} from '../toDoItem/toDoItem.module';
import {MdInputModule, MdButtonModule, MdCardModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {ToDoListComponent} from './toDoList.component';

@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ToDoItemModule,
    MdInputModule, MdButtonModule, FormsModule, MdCardModule
  ],
  exports: [ToDoListComponent],
  providers: []
})
export class ToDoListModule {
}
