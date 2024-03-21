import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { ProductRegistration } from './product-registration.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductRegitrationService {

  private readonly API = `${environment.backend}/product`;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ProductRegistration[]>(this.API);
  }

  getProductByCode(code: number) {
    console.log(code)
    return this.http.get<ProductRegistration[]>(`${this.API}/${code}`);
  }

  create(product: ProductRegistration) {
    delete product.code;
    return this.http.post(this.API, product);
  }

}