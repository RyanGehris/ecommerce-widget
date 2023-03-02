import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  currentSku: string | null = null;
  productList = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.currentSku = params.get('sku');
      if (this.currentSku) {
        this.setCurrentProductDetail(this.currentSku);
      }
    });
  }

  productDetail: Product | undefined = {
    id: '',
    sku: '',
    name: '',
    type: '',
    description: '',
    color: '',
    price: 0,
  };
  currentProductDetail = { ...this.productDetail };

  setCurrentProductDetail(sku: string) {
    this.productDetail = this.productList.find(
      (product: Product) => product.sku === sku
    );
  }

  updateDetails(updatedDetails: any) {}
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
