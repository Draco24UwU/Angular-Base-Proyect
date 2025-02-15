import { Component, EventEmitter, Output } from '@angular/core';
import { elemento_nav, elementos_nav } from '../../constants/navbar.-constants';

@Component({
  selector: 'app-navbar',
  template: `
    <ng-container>
      <nav
        class="flex flex-col justify-between items-center bg-primary h-screen absolute top-0 left-0 transition-all duration-300 ease-in-out"
        [ngClass]="expandBar ? 'w-60' : 'w-16'">
        <ul
          class="flex flex-col gap-5 w-full items-start justify-between list-none border-r pt-4 border-black/50 transition-all duration-300 ease-in-out">
          <li class="flex flex-col gap-8 w-full">
            <section class="flex items-center justify-center p-4 gap-8 w-full">
              <span
                *ngIf="expandBar"
                class="w-full flex gap-4 items-center justify-start font-bold text-3xl text-contrast">
                <p>App</p>
                <i class="bx bxs-package"></i>
              </span>

              <p-button
                (onClick)="expandBaHandler()"
                size="small"
                styleClass="bg-tertiary"
                [icon]="
                  expandBar
                    ? 'bx bx-right-arrow-alt bx-rotate-180 text-xl'
                    : 'bx bx-menu text-xl'
                " />
            </section>
          </li>
          <li
            class="flex flex-col items-center justify-center p-1.5 gap-2 w-full">
            <section
              *ngFor="let elemento of elementos_nav"
              class="text-contrast w-full">
              <app-nav-item [item]="elemento" [isNavBarExpanded]="expandBar" />
            </section>
          </li>
        </ul>
        <footer
          class="bg-slate-400 w-full font-bold text-white rounded-t-lg p-2 transition-all duration-300 ease-out"
          [ngClass]="expandSubBar ? 'h-52' : 'h-14'">
          @if (expandBar) {
            <section class="flex w-full items-center justify-between">
              <div class="flex flex-col text-sm">
                <p>Titulo</p>
                <p>Nombre</p>
              </div>
              <div>
                <p-button
                  (onClick)="expandSubBar = !expandSubBar"
                  size="small"
                  styleClass="text-sm"
                  label="<" />
              </div>
            </section>
          } @else {
            <div
              class="flex flex-col items-center justify-center p-2 rounded-full bg-slate-800">
              <p>G</p>
            </div>
          }
        </footer>
      </nav>
    </ng-container>
  `,
  styles: ``,
})
export class NavbarComponent {
  // * Atributos de la clase.
  public elementos_nav: elemento_nav[] = elementos_nav;
  public activeElement!: elemento_nav;
  public expandBar = false;
  public expandSubBar = false;
  @Output() navbarWidthChange = new EventEmitter<string>();

  //* Metodo para expandir o contraer el sidebar.
  expandBaHandler() {
    this.expandBar = !this.expandBar;
    if (!this.expandBar) {
      this.expandSubBar = false;
    }
    this.emitNavbarWidth();
  }

  //* Metodo del Output para emiitir el nuevo width de [ngClass]="expandBar ? 'w-60' : 'w-16'"
  emitNavbarWidth() {
    const width = this.expandBar
      ? 'ml-72 mt-7 transition-all duration-300 ease-in-out'
      : 'ml-20 mt-7 transition-all duration-300 ease-in-out';
    this.navbarWidthChange.emit(width);
  }
}
