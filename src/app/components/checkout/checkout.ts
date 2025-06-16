import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { RouterModule } from '@angular/router';
import { Product } from '../../services/products';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  carrito: Product[] = [];

  constructor(private cartService: CartService) {
    // 👇 Nos suscribimos al observable para recibir los productos
    this.cartService.carrito$.subscribe((productos) => {
      this.carrito = productos;
    });
  }

  calcularTotal(): number {
    return this.carrito.reduce((sum, prod) => sum + (prod.price ?? 0), 0);
  }

  eliminarProducto(index: number) {
    this.cartService.eliminarProducto(index);
  }

  finalizarPago() {
    console.log('Simulación de pago completada');
    // Aquí podrías limpiar el carrito y mostrar mensaje
    this.cartService.limpiarCarrito();
  }
}
