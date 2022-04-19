import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { TaskListComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTaskServiceModule } from 'projects/task/src/public-api';
import { AddTaskListComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    TaskListComponentModule,
    FirebaseTaskServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddTaskPage,
      },
    ]),
    AddTaskListComponentModule,
  ],
  declarations: [AddTaskPage],
  providers: [],
  exports: [],
})
export class AddTaskPageModule {}
