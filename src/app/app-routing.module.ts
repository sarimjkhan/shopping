import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './modules/product/components/product-details/product-details.component';
import { ProductListingComponent } from './modules/product/components/product-listing/product-listing.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: ProductListingComponent},
  {path: 'category/:catName', component: ProductListingComponent},
  {path: 'product-detail/:slug', component: ProductDetailsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProductListingComponent, ProductDetailsComponent]
