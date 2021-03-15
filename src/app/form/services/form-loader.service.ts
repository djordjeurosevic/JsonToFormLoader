import { Injectable } from '@angular/core';

import data from 'src/assets/form-config.json';


@Injectable()
export class FormLoaderService {

  constructor() { }

  getData(): any {
    return data;
  }
}
