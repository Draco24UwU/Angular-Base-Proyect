import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface MonthRangePickerData {
  name: string;
  label?: string;
  form: FormGroup;
  isRequired?: boolean;
  placeholder?: string;
}

@Component({
  selector: 'app-month-picker',
  template: `
    <ng-container *ngIf="monthData">
      <div class="flex flex-col items-start justify-center gap-4">
        <label
          *ngIf="monthData.label"
          [for]="monthData.name || ''"
          class=" text-slate-900 font-medium mb-2">
          {{ monthData.label || '' }}
          <span class="text-red-500">{{
            monthData.isRequired ? '*' : ''
          }}</span>
        </label>
        <div class="flex items-center justify-center gap-2">
          <div class="p-col-5">
            <p-dropdown
              [id]="monthData.name"
              [inputId]="monthData.name"
              [appendTo]="'body'"
              [options]="months"
              [(ngModel)]="startMonth"
              (onChange)="updateFormControl()"
              placeholder="Inicio"
              optionLabel="label"
              optionValue="value">
            </p-dropdown>
          </div>

          <div class="p-col-2 text-center font-semibold">
            <span>—</span>
          </div>

          <div class="p-col-5">
            <p-dropdown
              [inputId]="monthData.name"
              [appendTo]="'body'"
              [options]="months"
              [(ngModel)]="endMonth"
              (onChange)="updateFormControl()"
              placeholder="Fin"
              optionLabel="label"
              optionValue="value">
            </p-dropdown>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class MonthPickerComponent implements OnInit {
  @Input() monthData: Partial<MonthRangePickerData> = {};
  public startMonth = '';
  public endMonth = '';

  months = [
    { label: 'Enero', value: 'enero' },
    { label: 'Febrero', value: 'febrero' },
    { label: 'Marzo', value: 'marzo' },
    { label: 'Abril', value: 'abril' },
    { label: 'Mayo', value: 'mayo' },
    { label: 'Junio', value: 'junio' },
    { label: 'Julio', value: 'julio' },
    { label: 'Agosto', value: 'agosto' },
    { label: 'Septiembre', value: 'septiembre' },
    { label: 'Octubre', value: 'octubre' },
    { label: 'Noviembre', value: 'noviembre' },
    { label: 'Diciembre', value: 'diciembre' },
  ];

  ngOnInit() {
    if (this.monthData.form && this.monthData.name) {
      const value = this.monthData.form.get(this.monthData.name)?.value;
      if (value) {
        const [start, end] = value.split('-');
        this.startMonth = start;
        this.endMonth = end;
      }
    }
  }

  updateFormControl() {
    if (this.monthData.form && this.monthData.name) {
      if (this.startMonth && this.endMonth) {
        this.monthData.form
          ?.get(this.monthData.name)
          ?.setValue(`${this.startMonth}-${this.endMonth}`);
      }
    }
  }
}
