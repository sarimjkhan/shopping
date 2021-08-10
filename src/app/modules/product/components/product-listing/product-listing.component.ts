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
  currentPage: any = 1;
  pages:any = [];
  category: any = {}
  pagination: any  = {
    page: 1,
    limit: this.constantsService.getProductPageLimit()
  }
  products: any = []
  isLoaded = false
  showError: Boolean = false
  errorMessage: String = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private constantsService: ConstantsService
  ) {
    this.pages = Array(10).fill(0).map((x, i) => i+1)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if(!!params) {
        this.category.name = params.catName;
        this.category.slug = params.catName.toLowerCase();
      } else {
        this.category.slug = "beverages"
      }
      this.getProductsByCategory()
    })
  }

  getProductsByCategory() {
    this.productsService.getProductsByCategory(this.category.slug, this.pagination).subscribe(
      (res) => {
        this.products = res
      },
      (err) => {
        this.showError = true;
        this.errorMessage = "API failed to return response";
      }
    )
  }

  goToProductDetails(product: any) {
    this.router.navigate(['product-detail', product.slug])
  }

  onPageChange(pageNo: any){
    this.pagination.page = pageNo;
    this.currentPage = pageNo;
    this.getProductsByCategory()
  }

  onPageNext(){
    if(this.currentPage < this.pages.length) {
      this.pagination.page++;
      this.currentPage = this.pagination.page;
    }
    this.getProductsByCategory()
  }

  onPagePrevious(){
    if(this.currentPage > 1) {
      this.pagination.page--;
      this.currentPage = this.pagination.page;
    }
    this.getProductsByCategory()
  }

}
