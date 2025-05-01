import {
  AbstractControl,
  FormControl,
  FormControlStatus,
  FormGroup,
} from '@angular/forms';

export type FormGroups<T extends string> = {
  [key in T]: FormGroup<any>;
};

// * Interfaz genérica para FormData
export interface FormData<U> {
  form: FormGroup;
  formControls: { [key in keyof U]: FormControlData };
}

// * Interfaz generica para los FormControl.
export interface FormControlData {
  control: FormControl;
  value: string;
}

export interface User {
  nombre: string;
  email: string;
}

export interface Datos {
  apellido: string;
  edad: number;
}
