import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { FirebaseTaskServiceModule } from '../../secondary/infrastructure/firebase-task.service-module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, FirebaseTaskServiceModule, RouterModule],
  declarations: [TaskListComponent],
  providers: [],
  exports: [TaskListComponent],
})
export class TaskListComponentModule {}
