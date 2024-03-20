import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { TaxRuleRegistration } from './tax-rule-registration.interface';

@Injectable({
  providedIn: 'root'
})
export class TaxRuleRegitrationService {

  //private readonly API = `${environment.backend}/user/login`;
  private readonly API = `http://localhost:5097/api/taxrule`;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<TaxRuleRegistration[]>(this.API);
  }

  getTaxRule(code: number) {
    console.log(code)
    return this.http.get<TaxRuleRegistration[]>(`${this.API}/${code}`);
  }

  create(taxRuleRegistration : any) {
    console.log(taxRuleRegistration)
    return this.http.post(this.API, taxRuleRegistration);
  }

}