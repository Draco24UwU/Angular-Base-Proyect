import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// * NG prime
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    // * NG prime
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
  ],
  exports: [
    // * NG prime
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,

    //* Components
    NavbarComponent,
  ],
})
export class SharedModule {}
