import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private productPagelimit: Number = 25 
  constructor() { }

  getProductPageLimit(): Number {
    return this.productPagelimit
  }
}
