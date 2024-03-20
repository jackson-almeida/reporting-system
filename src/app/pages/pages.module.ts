import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaxRuleRegistrationComponent } from './tax-rule-registration/tax-rule-registration.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductRelationshipComponent } from './product-relationship/product-relationship.component';

@NgModule({
  declarations: [
    PagesComponent,
    TaxRuleRegistrationComponent,
    ProductRegistrationComponent,
    ProductRelationshipComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class HomeModule { }
