import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [NgIf],
})
export class Home {
  productosVisibles: { [key: number]: boolean } = {};

  mostrarProductos(id: number): void {
    this.productosVisibles[id] = !this.productosVisibles[id];
  }
}
