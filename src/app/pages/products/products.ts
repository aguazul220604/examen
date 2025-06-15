import { Component } from '@angular/core';
import { Product, Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Productos {
  productosPorCategoria: { [cat: number]: Product[] } = {};

  categoryNames: { [key: string]: string } = {
    '1': 'Gymshark',
    '2': 'Youngla',
    '3': 'Nike',
  };

  constructor(private productService: Products) {
    const productos = this.productService.getProducts();
    productos.forEach((prod) => {
      if (!this.productosPorCategoria[prod.cat]) {
        this.productosPorCategoria[prod.cat] = [];
      }
      this.productosPorCategoria[prod.cat].push(prod);
    });
  }
}
