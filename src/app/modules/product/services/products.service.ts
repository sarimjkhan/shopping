import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) { }

  getProductsByCategory(slug: String, pagination: any): Observable<any> {
    let baseUrl = this.baseService.getBaseUrl()
    let headers = { headers: new HttpHeaders(this.baseService.getBasicHeaders()) };

    return this.httpClient.get(`${baseUrl}/products?categorySlug=${slug}&per_page=${pagination.limit}&page=${pagination.page}`, headers)
  }
}
