import { Component } from '@angular/core';
import { Product, Products } from '../../services/products';
import { CartService } from '../../services/cart'; // Asegúrate de que la ruta esté correcta
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

  productoSeleccionado: Product | null = null;
  mostrarModal: boolean = false;

  constructor(
    private productService: Products,
    private cartService: CartService // ✅ Inyectas el servicio
  ) {
    const productos = this.productService.getProducts();
    productos.forEach((prod) => {
      if (!this.productosPorCategoria[prod.cat]) {
        this.productosPorCategoria[prod.cat] = [];
      }
      this.productosPorCategoria[prod.cat].push(prod);
    });
  }

  openModal(producto: Product) {
    this.productoSeleccionado = producto;
    this.mostrarModal = true;
  }

  closeModal() {
    this.mostrarModal = false;
    this.productoSeleccionado = null;
  }

  agregarAlCarrito(producto: Product | null) {
    if (producto) {
      this.cartService.agregarProducto(producto); // ✅ Usas el servicio
      console.log('Producto agregado al carrito:', producto);
      this.closeModal();
    }
  }
}
