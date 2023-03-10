import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-detail/:sku', component: ProductDetailComponent },
  { path: '**', redirectTo: '/product-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
