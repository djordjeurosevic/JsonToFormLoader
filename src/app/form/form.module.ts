import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormComponent } from './form.component'
import { BaseFormComponent } from './base-form/base-form-component';

import { CheckboxControlComponent } from './controls/checkbox-control/checkbox-control.component';
import { RadioControlComponent } from './controls/radio-control/radio-control.component';
import { TextControlComponent } from './controls/text-control/text-control.component';
import { SelectControlComponent } from './controls/select-control/select-control.component';
import { BaseControlDirective } from './controls/base-control/base-control.directive';
import { FormLoaderService } from './services/form-loader.service';

@NgModule({
  declarations: [
    BaseFormComponent,
    TextControlComponent,
    CheckboxControlComponent,
    RadioControlComponent,
    BaseControlDirective,
    SelectControlComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    FormComponent
  ],
  providers: [FormLoaderService]
})
export class FormModule { }
