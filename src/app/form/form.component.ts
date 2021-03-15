import { Component, ViewChild } from '@angular/core';

import { ControlConfig } from './models/control-config.interface';
import { BaseFormComponent } from './base-form/base-form-component'
import { FormLoaderService } from './services/form-loader.service';

@Component({
  selector: 'form-component',
  template: `
    <div>
      <base-form
        [config]="controls"
        #form="baseForm">
      </base-form>
    </div>
  `
})
export class FormComponent {
  @ViewChild(BaseFormComponent) form: BaseFormComponent;

  constructor(private fls: FormLoaderService){}
  controls: ControlConfig[] =  this.fls.getData();

}
