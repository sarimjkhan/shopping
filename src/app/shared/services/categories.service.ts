import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  getCategories(): Observable<any> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next({
          status: 1,
          message: "Successful",
          data: [
            {name: 'Beverages', id: '1', slug: 'beverages'},
            {name: 'Frozen', id: '2', slug: 'meat-meat'}
          ]
        })
        subscriber.complete()
      }, 5000)
    })
  }
}
