import { Options } from "./options.interface";

export interface ControlConfig {
  label?: string,
  key: string,
  options?: Options[]
  type: string,
  required? : boolean,
  value?: any
}
