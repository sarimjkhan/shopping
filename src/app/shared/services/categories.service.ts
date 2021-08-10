import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  getCategories(): Observable<any> {
    return new Observable((subscriber) => {
        subscriber.next({
          status: 1,
          message: "Successful",
          data: [
            {name: 'Beverages', id: '1', slug: 'beverages'},
            {name: 'Frozen', id: '2', slug: 'frozen'}
          ]
        })
        subscriber.complete()
    })
  }
}
