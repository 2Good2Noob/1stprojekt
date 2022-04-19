import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskListComponent } from './add-task-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddTaskListComponent],
  	providers: [],
  	exports: [AddTaskListComponent] })
export class AddTaskListComponentModule {
}
