import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  category: any = {}
  pagination: any  = {
    page: 1,
    limit: this.constantsService.getProductPageLimit()
  }
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private constantsService: ConstantsService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let routeData = history.state.data
      this.category.name = params.catName
      this.category.id = routeData.id
      this.category.slug = routeData.slug

      this.getProductsByCategory()
    })
  }

  getProductsByCategory() {
    this.productsService.getProductsByCategory(this.category.slug, this.pagination).subscribe((res) => {
      console.log("res: " , res)
    })
  }

}
