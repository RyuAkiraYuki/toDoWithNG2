import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ToDoListModule} from '../components/toDoList/toDoList.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ToDoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
