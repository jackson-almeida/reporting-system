import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { TaxRuleRegistration } from './tax-rule-registration.interface';

@Injectable({
  providedIn: 'root'
})
export class TaxRuleRegitrationService {

  private readonly API = `${environment.backend}/taxrule`;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<TaxRuleRegistration[]>(this.API);
  }

  getTaxRuleByCode(code: number) {
    return this.http.get<TaxRuleRegistration[]>(`${this.API}/${code}`);
  }

  create(taxRuleRegistration: any) {
    return this.http.post(this.API, taxRuleRegistration);
  }

}