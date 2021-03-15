import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlConfig } from '../models/control-config.interface';

@Component({
  selector: 'base-form',
  templateUrl: './base-form-component.html',
  styleUrls: ['./base-form-component.scss'],
  exportAs: 'baseForm',
})
export class BaseFormComponent implements OnInit {
  @Input()
  config: ControlConfig[] = [];

  public promises: any = [];
  public filtersLoaded!: Promise<boolean>;
  public baseForm: FormGroup;
  public controlsArray: String[] = [];
  public formIsValid: Boolean = false;

  get controls() { return this.config }
  get changes() { return this.baseForm.valueChanges; }
  get valid() { return this.baseForm.valid; }
  get value() { return this.baseForm.value; }

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.baseForm = this.createGroup();
  }

  private createGroup(): FormGroup {
    const group = this.fb.group({});
    this.controls.forEach(control => {
      group.addControl(control.key, this.createControl(control));
    });
    return group;
  }
  private createControl(config: ControlConfig): FormControl {
    return this.fb.control("",
      (config.required ? Validators.required : Validators.nullValidator));
  }
}

