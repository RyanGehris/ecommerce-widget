import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../common/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList = [];
  displayedColumns: string[] = ['name', 'color', 'type', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>(this.productList);

  constructor(private productsService: ProductsService) {}

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

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

  edit(sku: string) {
    console.log('Edit sku ', sku);
  }

  deleteProduct(id: string, name: string) {
    this.productsService.delete(id).subscribe(() => {
      this.fetchProductList();
      alert(`Deleted ${name}`);
    });
  }
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  type: string;
  description: string;
  color: string;
  price: number;
}
