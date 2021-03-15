import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../models/control.interface';
import { ControlConfig } from '../../models/control-config.interface'

@Component({
  template: `
  <div>
    <mat-form-field [formGroup]="group" appearance="standard" [style.width.%]=100>
      <mat-label> {{config.label}}</mat-label>
      <mat-select [formControlName]="config.key" [required]="config.required">
        <mat-option *ngFor="let option of config.options" [value] = "option.value">
          {{option.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  `
})
export class SelectControlComponent implements Control {
  config: ControlConfig;
  group: FormGroup;
}
