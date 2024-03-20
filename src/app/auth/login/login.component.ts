import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService,
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleClickLogin() {
    this.service.create(this.loginForm.value).subscribe(
      success => {
        localStorage.clear();
        console.log(Object.values(success))
        //localStorage.setItem('Authorization', Object.values(success));
        this.router.navigate(['']);
      },
      () => alert("Credenciais inválidas!"),
    );
  }

  ngOnInit(): void {
      
  }
}