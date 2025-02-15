import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //* Ancho inicial del side bar.
  navbarWidth = 'ml-20 mt-7';

  onNavbarWidthChange(width: string) {
    this.navbarWidth = width;
  }
}
