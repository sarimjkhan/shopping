import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/shared/services/base.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any = null
  showError: Boolean = false;
  errorMessage: String = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getProductDetails(params.slug)
    })
  }

  getProductDetails(slug: any) {
    this.productsService.getProductDetails(slug).subscribe(
      (res) => {
        this.product = res[0]
        this.product.reversedCategories = this.product.categories.reverse()
      },
      (err) => {
        this.showError = true;
        this.errorMessage = "API failed to return response";
      }
    )
  }

}
