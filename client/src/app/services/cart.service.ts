import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart() {
    console.log(`Adding to cart`);
  }
}
