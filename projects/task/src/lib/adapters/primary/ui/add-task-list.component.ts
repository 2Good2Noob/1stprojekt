import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';

@Component({
  selector: 'lib-add-task-list',
  templateUrl: './add-task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskListComponent {
  readonly addTask: FormGroup = new FormGroup({ zadanie: new FormControl() });

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {}

  onZadanieSubmited(addTask: FormGroup): void {
    if (addTask.invalid) {
      return;
    }
    this._addsTaskDto.add({
      zadanie: addTask.get('zadanie')?.value,
    });
  }
}
