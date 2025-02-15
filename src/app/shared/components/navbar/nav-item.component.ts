import {
  Component,
  inject,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { elemento_nav } from '../../constants/navbar.-constants';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations'; // Importa las animaciones
import { Router } from '@angular/router';
import { NavItemService } from './services/nav-item.service.ts.service';

@Component({
  selector: 'app-nav-item',
  template: `
    <section>
      <div
        (click)="toggleSubNav()"
        [pTooltip]="isNavBarExpanded ? '' : item.text"
        class="rounded-lg transition-all duration-100 ease-in-out"
        [ngClass]="getDynamicClasses(item, nivel)">
        <section
          class="w-full flex items-center p-2"
          [ngClass]="[isNavBarExpanded ? 'justify-between' : 'justify-center']">
          <section class="flex items-center justify-center gap-2">
            <i
              [class]="item.icon"
              class="sm:text-2xl text-lg transition-all duration-200 ease-in-out"></i>
            <p *ngIf="isNavBarExpanded">{{ item.text }}</p>
          </section>
          <section *ngIf="isNavBarExpanded">
            <span *ngIf="item.subNav" @iconAnimation>
              @if (item.isExpanded) {
                <i class="bx bxs-down-arrow"></i>
              } @else {
                <i class="bx bxs-right-arrow"></i>
              }
            </span>
          </section>
        </section>
      </div>
      <div *ngIf="item.isExpanded && item.subNav" @slideFade>
        <app-nav-item
          *ngFor="let subItem of item.subNav"
          [nivel]="nivel + 1"
          [isNavBarExpanded]="isNavBarExpanded"
          [item]="subItem" />
      </div>
    </section>
  `,
  animations: [
    // Animación para el ícono
    trigger('iconAnimation', [
      state('void', style({ transform: 'rotate(0deg)' })), // Flecha hacia abajo
      state('*', style({ transform: 'rotate(-180deg)' })), // Flecha hacia la derecha
      transition('void <=> *', animate('200ms ease-in-out')),
    ]),
    // Animación para el submenú
    trigger('slideFade', [
      state('void', style({ opacity: 0, height: '0px', overflow: 'hidden' })), // Estado inicial (invisible)
      state('*', style({ opacity: 1, height: '*' })), // Estado final (visible)
      transition('void <=> *', animate('200ms ease-in-out')), // Transición suave
    ]),
  ],
})
export class NavItemComponent implements OnChanges {
  @Input() item!: elemento_nav;
  @Input() isNavBarExpanded!: boolean;
  @Input() nivel: number = 1;

  private readonly _router = inject(Router);
  private readonly _navItemService = inject(NavItemService);

  toggleSubNav() {
    if (this.item.subNav) {
      if (this.nivel === 1) {
        this._navItemService.setExpandedItem(this.item);
      }
      this.item.isExpanded = !this.item.isExpanded;
    } else if (this.item.route) {
      this._router.navigate([this.item.route]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isNavBarExpanded']) {
      if (!changes['isNavBarExpanded'].currentValue) {
        this._navItemService.collapseItem(this.item);
      }
    }
  }

  getDynamicClasses(item: any, nivel: number): any {
    if (this.isNavBarExpanded) {
      return {
        'hover:scale-105 hover:bg-tertiary cursor-pointer border border-dashed border-white/50':
          !item.subNav,
        'border-l border-red-500': nivel === 1 && item.isExpanded,
        'bg-tertiary': item.isExpanded,
        [`ml-${nivel} mt-2`]: true,
      };
    } else {
      return {
        'hover:scale-105 hover:bg-tertiary cursor-pointer border border-dashed border-white/50':
          !item.subNav,
        'bg-tertiary': item.isExpanded,
        [`mt-2`]: true && nivel !== 1,
      };
    }
  }
}
