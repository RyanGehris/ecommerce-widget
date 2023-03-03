import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  model = 'products';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  delete(id: string) {
    return this.http.delete(this.getUrlWithID(id));
  }

  update(productDetails: {
    id: string;
    sku: string;
    name: string;
    type: string;
    description: string;
    color: string;
    price: number;
  }) {
    return this.http.put(this.getUrlWithID(productDetails.id), productDetails);
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
