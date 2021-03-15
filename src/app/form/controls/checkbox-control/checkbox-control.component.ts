import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../models/control.interface';
import { ControlConfig } from '../../models/control-config.interface'


@Component({
  template: `
  <div [formGroup]="group">

      <ng-container *ngIf="!config.options;else multi">
        <section [style.width.%]=100 class="checkbox-section">
              <mat-checkbox [required]="config.required" [formControlName]="config.key">{{config.label}}</mat-checkbox>
        </section>
      </ng-container>

      <ng-template #multi>
      <mat-form-field [formGroup]="group" appearance="standard" [style.width.%]=100>
        <mat-label> {{config.label}}</mat-label>
        <mat-select [formControlName]="config.key" multiple [required]="config.required">
          <mat-option *ngFor="let option of config.options" [value] = "option.value">
            {{option.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      </ng-template>
  </div>
  `,
  styles: [`
    .checkbox-section {
      margin: 6px 0;
    }
  `]

})
export class CheckboxControlComponent implements Control {
  config: ControlConfig;
  group: FormGroup;
}
