import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductModule { }
