import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { ProductRelationshipComponent } from './product-relationship/product-relationship.component';
import { TaxRuleRegistrationComponent } from './tax-rule-registration/tax-rule-registration.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'registro-regra-imposto',
        component: TaxRuleRegistrationComponent
      },
      {
        path: 'cadastro-produto',
        component: ProductRegistrationComponent
      },
      {
        path: 'relacao-produto',
        component: ProductRelationshipComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
