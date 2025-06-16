import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private carritoSubject = new BehaviorSubject<Product[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  getCarrito(): Product[] {
    return this.carritoSubject.value;
  }

  agregarProducto(producto: Product) {
    const carritoActual = this.carritoSubject.value;
    this.carritoSubject.next([...carritoActual, producto]);
  }

  eliminarProducto(index: number) {
    const carritoActual = [...this.carritoSubject.value];
    carritoActual.splice(index, 1);
    this.carritoSubject.next(carritoActual);
  }

  limpiarCarrito() {
    this.carritoSubject.next([]);
  }
}
