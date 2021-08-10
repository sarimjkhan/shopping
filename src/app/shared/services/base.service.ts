import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl = "https://storeapi.airliftgrocer.com/v2"
  constructor() { }

  getBaseUrl(): string {
    return this.baseUrl
  }

  getBasicHeaders() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      "access-key": "f0f0682a-20db-4c63-aa12-d9214a0c5203"
    }
  }
}
