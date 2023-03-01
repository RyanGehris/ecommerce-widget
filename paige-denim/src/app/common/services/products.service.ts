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

  delete(sku: string) {
    return this.http.delete(this.getUrlWithSku(sku));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithSku(sku: string) {
    return `${this.getUrl()}/${sku}`;
  }
}
