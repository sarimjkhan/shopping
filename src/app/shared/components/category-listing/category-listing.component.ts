import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {
  categories: any = [] // add categries model here 
  selectedCategory: any = 'beverages';

  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      //Add api response check here
      this.categories = res.data
    })
  }

  navigateToProducts(category: any) {
    this.selectedCategory = category.name;
    this.router.navigate(['category', category.name])
  }
}
