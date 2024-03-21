import { Component, OnInit } from "@angular/core";
import { RegisterService } from "./register.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegisterForm: FormGroup;

  constructor(
    private service: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  handleClickRegister() {
    if (this.userRegisterForm.value.password == this.userRegisterForm.value.confirmPassword) {
      this.service.create(this.userRegisterForm.value).subscribe(
        success => {
          alert('Usuário cadastrado, realize o login!')
          this.router.navigate(['auth/login']);
        },
        () => alert("Dados inválidos!"),
      );
    } else {
      alert('As senhas não conferem!')
    }
    
  }

  ngOnInit(): void {
      
  }
}