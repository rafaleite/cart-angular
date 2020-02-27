import { Component } from "@angular/core";
import { products } from "../products"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(productName) {
    window.alert('You will be notified when '+ productName +' goes on sale');
  }
}