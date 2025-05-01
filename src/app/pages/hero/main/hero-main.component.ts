import { Component, inject } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { TestService } from '../services/test.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MonthRangePickerData } from '../../../shared/components/month-picker.component';

@Component({
  selector: 'app-hero-main',
  template: `
    <ng-container>
      <section class="flex items-center justify-center gap-4 bg-red-100">
        <app-month-picker [monthData]="monthData" />
        <app-month-picker [monthData]="monthDataEdit" />
      </section>
    </ng-container>
  `,
  styles: ``,
})
export class HeroMainComponent {
  public form: FormGroup;
  public formEdit: FormGroup;
  private readonly _fb = inject(FormBuilder);
  constructor() {
    this.form = this._fb.group({
      fecha_vacaciones: [null],
    });

    this.formEdit = this._fb.group({
      fecha_vacaciones: [null],
    });

    this.form.valueChanges.subscribe(value => {
      console.log(value, 'Create');
      console.log(this.form.value);
    });

    this.formEdit.valueChanges.subscribe(value => {
      console.log(value, 'Edit');
      console.log(this.formEdit.value);
    });

    this.initializeData();
    this.patchData();
  }

  public initializeData() {
    if (this.form) {
      this.monthData.form = this.form;
    }

    if (this.formEdit) {
      this.monthDataEdit.form = this.formEdit;
    }
  }

  public patchData() {
    if (this.formEdit) {
      this.formEdit.patchValue({
        fecha_vacaciones: 'enero-abril',
      });
    }
  }

  public monthData: Partial<MonthRangePickerData> = {
    isRequired: true,
    name: 'fecha_vacaciones',
    label: 'Fecha vacaciones',
    placeholder: 'Prueba',
  };

  public monthDataEdit: Partial<MonthRangePickerData> = {
    isRequired: true,
    name: 'fecha_vacaciones',
    label: 'Fecha vacaciones',
    placeholder: 'Prueba',
  };
}
