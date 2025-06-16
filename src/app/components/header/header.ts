import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { Product } from '../../services/products'; // Ajusta la ruta si es diferente

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  carrito: Product[] = [];
  mostrarCarrito: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.carrito$.subscribe((productos) => {
      this.carrito = productos;
    });
  }

  toggleCarritoModal() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  eliminarDelCarrito(index: number) {
    this.cartService.eliminarProducto(index);
  }

  calcularTotal(): number {
    return this.carrito.reduce((sum, prod) => sum + (prod.price ?? 0), 0);
  }

  irACheckout() {
    console.log('Finalizar compra:', this.carrito);
  }
}
