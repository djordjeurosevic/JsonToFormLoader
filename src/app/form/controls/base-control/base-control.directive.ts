import { ComponentFactoryResolver, ComponentRef, Directive, 
  Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CheckboxControlComponent } from '../checkbox-control/checkbox-control.component';
import { TextControlComponent } from '../text-control/text-control.component';
import { RadioControlComponent } from '../radio-control/radio-control.component';
import { SelectControlComponent } from '../select-control/select-control.component';

import { ControlConfig } from '../../models/control-config.interface';
import { Control } from '../../models/control.interface';

const components: {[type: string]: Type<Control>} = {
  text: TextControlComponent,
  select: SelectControlComponent,
  radio: RadioControlComponent,
  checkbox: CheckboxControlComponent
};

@Directive({
  selector: '[baseControl]'
})
export class BaseControlDirective implements Control, OnInit {
  @Input()
  config: ControlConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Control>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  
  ngOnInit() {
    const component = this.resolver.resolveComponentFactory<Control>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
