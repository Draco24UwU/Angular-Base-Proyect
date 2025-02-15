import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// * NG prime
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { NavItemComponent } from './components/navbar/nav-item.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [NavbarComponent, NavItemComponent],
  imports: [
    CommonModule,
    // * NG prime
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
  ],
  exports: [
    // * NG prime
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,

    //* Components
    NavbarComponent,
    NavItemComponent,
  ],
})
export class SharedModule {}
