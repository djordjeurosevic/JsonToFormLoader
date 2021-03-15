import { FormGroup } from '@angular/forms';
import { ControlConfig } from './control-config.interface';

export interface Control {
  config: ControlConfig,
  group: FormGroup
}
