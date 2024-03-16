import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductRelationshipComponent } from './product-relationship/product-relationship.component';
import { TaxRuleRegistrationComponent } from './tax-rule-registration/tax-rule-registration.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'registro-produto',
        component: ProductRegistrationComponent
      },
      {
        path: 'relacao-produto',
        component: ProductRelationshipComponent
      },
      {
        path: 'registro-regra-imposto',
        component: TaxRuleRegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
