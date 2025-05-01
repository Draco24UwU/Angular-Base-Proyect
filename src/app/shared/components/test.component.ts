import { Component, inject, OnDestroy } from '@angular/core';
import { TestService } from '../../pages/hero/services/test.service';
import { HeroService } from '../../pages/hero/services/hero.service';
import { FormControl, FormControlStatus, FormGroup } from '@angular/forms';
import { Datos, FormControlData, FormData, User } from '../common/type';

@Component({
  selector: 'app-test',
  template: `
    <ng-container>
      <form [formGroup]="formData.form" class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="">Nombre</label>
          <input
            pInputText
            type="text"
            size="small"
            class="w-fit p-2"
            [formControlName]="formData.formControls.nombre.value" />
          <app-field-error [control]="formData.formControls.nombre.control" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="">Email</label>
          <input
            pInputText
            type="text"
            class="w-fit  p-2"
            [formControlName]="formData.formControls.email.value" />
          <app-field-error [control]="formData.formControls.email.control" />
        </div>
        <div>
          <p-button (onClick)="submit()" label="Aqui" severity="success" />
        </div>
      </form>
    </ng-container>
  `,
  styles: ``,
})
export class TestComponent implements OnDestroy {
  public formData: FormData<User>;
  private readonly _testService = inject(TestService);

  constructor() {
    this.formData = this._testService.getFormData('test-1');
    this.formData.formControls.email.control.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this._testService.resetForm('test-1');
  }

  submit() {
    console.log(this.formData.formControls.email.control);
    if (this.formData.form.invalid) {
      this.formData.form.markAllAsTouched();
    } else {
      alert('Valido');
    }
  }
}
