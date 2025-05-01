import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  template: `
    <ng-container *ngIf="control?.touched && control?.invalid">
      <small *ngIf="control?.errors?.['required']" class="text-red-500">
        Este campo {{ control.value }} es obligatorio.
      </small>
      <small *ngIf="control?.errors?.['email']" class="text-red-500">
        Debe ser un correo electrónico válido.
      </small>
      <small *ngIf="control?.errors?.['minlength']" class="text-red-500">
        El campo debe tener al menos
        {{ control.errors?.['minlength']?.requiredLength }} caracteres.
      </small>
    </ng-container>
  `,
  styles: [],
})
export class FieldErrorComponent {
  @Input() control!: FormControl; // Recibe el control de formulario como input
}
