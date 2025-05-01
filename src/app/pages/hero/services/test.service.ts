import { Injectable } from '@angular/core';
import { FormHandler } from '../../../shared/interfaces/formHandler';
import { Validators } from '@angular/forms';

type TestForms = 'test-1' | 'test-2';

@Injectable({
  providedIn: 'root',
})
export class TestService extends FormHandler<TestForms> {
  constructor() {
    super();

    this.initializeForms({
      'test-1': this._fb.group({
        nombre: this._fb.control('', [Validators.required]),
        email: this._fb.control('', [Validators.required, Validators.email]),
      }),
      'test-2': this._fb.group({
        apellido: this._fb.control('', [Validators.required]),
        edad: this._fb.control('', [Validators.required]),
      }),
    });
  }
}
