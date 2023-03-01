import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  details = {
    id: '123897917321239',
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
    color: 'black',
    price: 80.0,
  };
  currentDetails = { ...this.details };

  updateDetails(updatedDetails: Product) {
    this.details = updatedDetails;
  }
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  type: string;
  description: string;
  color: string;
  price: number;
}
