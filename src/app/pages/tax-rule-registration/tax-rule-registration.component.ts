import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaxRuleRegitrationService } from './tax-rule-registration.service';

@Component({
  selector: 'tax-rule-registration-component',
  templateUrl: './tax-rule-registration.component.html',
  styleUrls: ['./tax-rule-registration.component.scss']
})
export class TaxRuleRegistrationComponent implements AfterViewInit {
  
  @ViewChild('inputElement') inputElement: any;
  
  taxRuleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TaxRuleRegitrationService
  ) {
    this.taxRuleForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      rate: ['', Validators.required]
    });
  }

  handleClickCreateTaxRule() {
    if (this.taxRuleForm.value.code == null) {
      this.service.create(this.taxRuleForm.value).subscribe(
        () => alert("Regra adicionada!"),
        () => alert("Credenciais inválidas!"),
      );
    } else {
      alert('Favor remover o código, código deve ser gerado pelo sistema!');
    }
  }
  
  onInputBlur() {
    const code = this.inputElement.nativeElement.value;

    this.service.getTaxRuleByCode(code).subscribe(
      (success) => {
        const result = Object(success);
        this.taxRuleForm.patchValue({
          code: result.code,
          name: result.name,
          rate: result.rate
        });
      },
      () => alert("Regra de importo não existe!"),
    );
  }

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }
}
