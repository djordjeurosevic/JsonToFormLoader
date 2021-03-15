import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../models/control.interface';
import { ControlConfig } from '../../models/control-config.interface'

@Component({
  template: `
  <div [formGroup]="group" >
      <mat-form-field [style.width.%]=100 appearance="standard">
        <mat-label> {{config.label}} </mat-label>
        <input [formControlName]="config.key" [required]="config.required" matInput>
      </mat-form-field> 
  </div>
  `
})
export class TextControlComponent implements Control {
  config: ControlConfig;
  group: FormGroup;
}
