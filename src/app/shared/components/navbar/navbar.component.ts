import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <ng-container>
      <nav
        class="flex flex-col justify-between items-center bg-slate-600 h-screen absolute top-0 left-0 transition-all duration-300 ease-in-out"
        [ngClass]="expandBar ? 'w-60' : 'w-16'">
        <ul
          class="flex flex-col gap-20 w-full items-start justify-between list-none border-r pt-4 border-black/50 transition-all duration-300 ease-in-out">
          <li class="flex flex-col gap-8 w-full">
            <section class="flex flex-col gap-8 w-full">
              <p-button
                (onClick)="expandBar = !expandBar"
                size="small"
                [style]="{ outline: 'none', 'box-shadow': 'none' }"
                class="flex justify-center gap-8 hover:bg-yellow-200 w-full"
                [icon]="
                  expandBar
                    ? 'bx bx-right-arrow-alt bx-rotate-180 text-2xl'
                    : 'bx bx-menu text-2xl'
                " />
            </section>
          </li>
          <li class="flex flex-col gap-8 w-full">
            <section
              class="flex justify-center gap-8 hover:bg-yellow-200 w-full"
              [ngClass]="expandBar ? 'items-center' : 'items-start'">
              <p-button icon="bx bxs-right-arrow" />
              <p *ngIf="expandBar">Ver</p>
            </section>
          </li>
        </ul>
        <footer
          class="bg-slate-400 w-full font-bold text-white rounded-t-lg p-2">
          @if (expandBar) {
            <div class="flex flex-col">
              <p>Titulo</p>
              <p>Nombre</p>
            </div>
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
  public expandBar = false;
}
