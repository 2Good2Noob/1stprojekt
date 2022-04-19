import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';

@Component({
  selector: 'lib-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  task$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();
  readonly addTask: FormGroup = new FormGroup({ zadanie: new FormControl() });

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort
  ) {}

  onSubmitAddtasked(addTask: FormGroup): void {
    if (addTask.invalid) {
      return;
    }
    this._addsTaskDto.add({
      zadanie: addTask.get('zadanie')?.value,
    });
  }
}
