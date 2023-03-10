import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../common/services/products.service';
import { Product } from '../common/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  currentSku: string | null = null;
  productList = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.fetchProductList();
  }

  productDetail: Product = {
    id: '',
    sku: '',
    name: '',
    type: '',
    description: '',
    color: '',
    price: 0,
  };
  currentProductDetail = { ...this.productDetail };

  fetchProductList() {
    this.productsService.all().subscribe((result: any) => {
      this.productList = result;
      this.getParam();
    });
  }

  getParam() {
    this.route.paramMap.subscribe((params) => {
      this.currentSku = params.get('sku');
      if (this.currentSku) {
        this.setCurrentProductDetail(this.currentSku);
      }
    });
  }

  setCurrentProductDetail(sku: string) {
    this.productDetail =
      this.productList.find((product: Product) => product.sku === sku) ||
      this.productDetail;
    this.currentProductDetail = { ...this.productDetail };
  }

  updateDetails(updatedDetails: any) {
    this.productsService.update(updatedDetails).subscribe({
      next: () => {
        alert('Successfully updated');
        this.router.navigate(['/product-list']);
      },
      error: (error) => {
        alert(error.message);
        this.router.navigate(['/product-list']);
      },
    });
  }
}
