import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  private storageName: string = "cart";


  constructor(
    private http: HttpClient
  ) {
    let data = localStorage.getItem(this.storageName);
    this.items = data == null ? this.items : JSON.parse(data);
   }

  addToCart(product) {
    this.items.push(product);
    localStorage.setItem(this.storageName,JSON.stringify(this.items))
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.setItem(this.storageName, JSON.stringify(this.items))
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
