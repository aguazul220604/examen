import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // importa el NgIf

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [NgIf], // agrega NgIf a los imports del componente
})
export class Home {
  productosVisibles: { [key: number]: boolean } = {};

  mostrarProductos(id: number): void {
    this.productosVisibles[id] = !this.productosVisibles[id];
  }
}
