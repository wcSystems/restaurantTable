import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant-angular';
  isEntrada: boolean = true;

  entrar() {
    this.isEntrada = !this.isEntrada;
  }
}
