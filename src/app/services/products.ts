import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number | null;
  description: string | null;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
      image: '/img/img2.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description for Product 2',
      image: '/img/img3.jpeg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Description for Product 3',
      image: '/img/img4.jpeg',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
