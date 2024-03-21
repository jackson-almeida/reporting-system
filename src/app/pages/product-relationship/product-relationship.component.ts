import { Component } from '@angular/core';
import { ProductRegistration } from '../product-registration/product-registration.interface';
import { ProductRegitrationService } from '../product-registration/product-registration.service';

@Component({
  selector: 'product-relationship-component',
  templateUrl: './product-relationship.component.html',
  styleUrls: ['./product-relationship.component.scss']
})
export class ProductRelationshipComponent {

  productList: ProductRegistration[] = [];

  constructor(
    private productService: ProductRegitrationService
  ) {}

  generate() {
    this.productService.get().subscribe(
      (success) => {
        this.productList = success;
      },
      () => alert('Falha ao receber lista de produtos!')
    );
  }

  clear() {
    this.productList = [];
  }
}
