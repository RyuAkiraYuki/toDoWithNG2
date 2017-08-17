import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdCheckboxModule, MdIconRegistry} from '@angular/material';

import {ToDoItemComponent} from './toDoItem.component';

@NgModule({
  declarations: [
    ToDoItemComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdInputModule, MdCheckboxModule
  ],
  exports: [ToDoItemComponent],
  providers: [
    MdIconRegistry
  ]
})

export class ToDoItemModule {
}
