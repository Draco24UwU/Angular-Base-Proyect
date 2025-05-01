import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { FormControlData, FormData, FormGroups } from '../common/type';

@Injectable()
export abstract class FormHandler<T extends string> {
  private forms: FormGroups<T> = {} as FormGroups<T>;
  protected readonly _fb = inject(FormBuilder);

  public getForm(formName: T): FormGroup {
    return this.forms[formName];
  }

  public getFormData<U extends object>(formName: T): FormData<U> {
    const form = this.getForm(formName);
    const formControls = {} as { [key in keyof U]: FormControlData };

    // Recorrer los controles del formulario
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);

      // Asegurarte de que el control sea un FormControl
      if (control) {
        formControls[key as keyof U] = {
          control: control as FormControl,
          value: key,
        };
      }
    });

    return {
      form: form,
      formControls: formControls,
    };
  }

  public getFormArray(formName: T, formArrayName: string): FormArray | null {
    if (!this.getForm(formName).get(formArrayName)) return null;
    return this.getForm(formName).get(formArrayName) as FormArray;
  }

  public resetForm(formName: T): void {
    const form = this.getForm(formName);
    this.clearControls(form.controls);
  }

  public resetForms() {
    Object.values(this.forms).forEach(_form => {
      const form = _form as FormGroup<any>;
      this.clearControls(form.controls);
    });
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private clearControls(controls: { [key: string]: AbstractControl }) {
    Object.keys(controls).forEach(key => {
      const control = controls[key];
      if (control instanceof FormGroup) {
        this.clearControls(control.controls);
      } else if (control instanceof FormArray) {
        control.clear();
      } else if (control instanceof FormControl) {
        control.setValue(null);
        control.markAsUntouched();
        control.markAsPristine();
      }
    });
  }

  public showForms(): void {
    Object.values(this.forms).forEach(_form => {
      const form = _form as FormGroup;
      console.log(form.value);
    });
  }

  public initializeForms(forms: FormGroups<T>): void {
    if (!forms) return;
    this.forms = forms;
  }
}
