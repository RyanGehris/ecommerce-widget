import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailComponent],
  imports: [BrowserAnimationsModule, MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
