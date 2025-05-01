import {
  trigger,
  transition,
  style,
  animate,
  group,
  query,
} from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        // Aplica la animación para cualquier cambio de ruta
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'fixed',
              top: 28,
              left: 0,
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '0.65s cubic-bezier(0.4, 0, 0.2, 1)', // Curva personalizada
                style({ transform: 'translateX(50%)', opacity: 0 })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ transform: 'translateX(-25%)', opacity: 0 }),
              animate(
                '0.65s 0.1s cubic-bezier(0.4, 0, 0.2, 1)', // Curva personalizada
                style({ transform: 'translateX(0)', opacity: 0.6 })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  //* Ancho inicial del side bar.
  navbarWidth = 'ml-20 mt-7';
  routeAnimation: boolean = true;

  constructor(private router: Router) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  //* Metodo para obtener el extado del sidebar cada que cambia.
  onNavbarWidthChange(width: string) {
    this.navbarWidth = width;
  }
}
