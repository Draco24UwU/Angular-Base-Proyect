import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHandler } from '../../../shared/interfaces/formHandler';
import { FormGroups } from '../../../shared/common/type';

type ServiceForms = 'test' | 'xd';

@Injectable({
  providedIn: 'root',
})
export class HeroService extends FormHandler<ServiceForms> {
  constructor() {
    super();
    this.initializeForms({
      test: this._fb.group({
        taco1: this._fb.control(''),
      }),
      xd: this._fb.group({
        taco2: this._fb.control(''),
      }),
    });
  }
}
