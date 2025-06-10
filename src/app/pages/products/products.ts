import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true, // Asegúrate de tener esto si es componente standalone
  imports: [CommonModule], // Importa CommonModule para usar *ngFor, *ngIf, etc.
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Productos {
  productos: Product[] = [];
  constructor(private product: Products) {
    this.productos = this.product.getProducts();
  }
}
