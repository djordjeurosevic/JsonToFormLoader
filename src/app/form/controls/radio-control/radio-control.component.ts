import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../models/control.interface';
import { ControlConfig } from '../../models/control-config.interface'

@Component({
  template: `
  <div [formGroup]="group">
      <mat-radio-group [formControlName]="config.key" class="radio-group" [required]="config.required">
        <label>{{config.label}}</label> 
        <mat-radio-button 
           *ngFor="let option of config.options" [value] = "option.value">
          {{option.label}}
        </mat-radio-button>
      </mat-radio-group>
  </div>
  `,
  styles: [`
    .radio-group {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
    }    
  `]

})
export class RadioControlComponent implements Control {
  config: ControlConfig;
  group: FormGroup;


}
