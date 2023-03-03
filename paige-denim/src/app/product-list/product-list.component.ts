import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../common/services/products.service';
import { Product } from '../common/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList = [];
  displayedColumns: string[] = ['name', 'color', 'type', 'cost', 'actions'];
  dataSource = new MatTableDataSource<Product>(this.productList);

  constructor(private productsService: ProductsService) {}

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngOnInit(): void {
    this.fetchProductList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: Product, filter: string) => {
      return data.color.toLowerCase().includes(filter.toLowerCase());
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fetchProductList() {
    this.productsService.all().subscribe((result: any) => {
      this.productList = result;
      this.updateDataSource();
    });
  }

  updateDataSource() {
    this.dataSource = new MatTableDataSource<Product>(this.productList);
    this.dataSource.paginator = this.paginator;
  }

  deleteProduct(id: string, name: string) {
    this.productsService.delete(id).subscribe(() => {
      this.fetchProductList();
      alert(`Deleted ${name}`);
    });
  }
}
