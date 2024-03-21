import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductRegistration } from './product-registration.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductRegitrationService } from './product-registration.service';
import { TaxRuleRegitrationService } from '../tax-rule-registration/tax-rule-registration.service';
import { TaxRuleRegistration } from '../tax-rule-registration/tax-rule-registration.interface';

@Component({
  selector: 'product-registration-component',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit, AfterViewInit {

  @ViewChild('inputElement') inputElement: any;
  taxRuleList: TaxRuleRegistration[] = [];
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductRegitrationService,
    private taxRuleService: TaxRuleRegitrationService
  ) {
    this.productForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      custPrice: ['', Validators.required],
      markup: ['', Validators.required],
      custSale: ['', Validators.required],
      realMargin: ['', Validators.required],
      taxRuleCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.taxRuleService.get().subscribe(
      (success) => {
        this.taxRuleList = success;
      },
      () => alert("Não há regra de imposto cadastradas!"),
    );
  }

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }

  handleClickCreateProduct() {
    this.service.create(this.productForm.value).subscribe(
      () => alert('Produto adicioado com sucesso!'),
      () => alert('Falha ao adicionar produto!')
    );
    console.log(this.productForm.value)
  }
}
