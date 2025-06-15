import { Injectable } from '@angular/core';

export interface Product {
  cat: number;
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
      cat: 1,
      id: 1,
      name: 'Chamarra deportiva',
      price: 1500,
      description: 'Dump G1',
      image: '/img/catv11.jpg',
    },
    {
      cat: 1,
      id: 2,
      name: 'Conjunto deportivo',
      price: 4000,
      description: 'Dump G2',
      image: '/img/catv12.jpg',
    },
    {
      cat: 1,
      id: 3,
      name: 'Sudadera',
      price: 800,
      description: 'Dump G3',
      image: '/img/catv13.jpg',
    },

    {
      cat: 2,
      id: 1,
      name: 'Sudadera',
      price: 1000,
      description: 'Dump Y1',
      image: '/img/catv21.jpg',
    },
    {
      cat: 2,
      id: 2,
      name: 'Oversize',
      price: 200,
      description: 'Dump Y2',
      image: '/img/catv22.jpg',
    },
    {
      cat: 2,
      id: 3,
      name: 'Comprehension',
      price: 700,
      description: 'Dump Y3',
      image: '/img/catv23.jpg',
    },

    {
      cat: 3,
      id: 4,
      name: 'Conjunto deportivo',
      price: 4000,
      description: 'Dump N1',
      image: '/img/catv31.jpg',
    },
    {
      cat: 3,
      id: 5,
      name: 'Conjunto deportivo',
      price: 4000,
      description: 'Dump N2',
      image: '/img/catv32.jpg',
    },
    {
      cat: 3,
      id: 6,
      name: 'Conjunto deportivo',
      price: 4000,
      description: 'Dump N3',
      image: '/img/catv33.jpg',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
