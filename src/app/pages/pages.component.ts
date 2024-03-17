import { Location } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pages-component',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, DoCheck {
  titlePage = '';

  ngOnInit() {
  }
  
  ngDoCheck(): void {
    const path = this.location.path();
    switch(path) {
      case '/registro-regra-imposto':
        this.titlePage = 'Registro de regra de imposto';
        break;
      case '/cadastro-produto':
        this.titlePage = 'Cadastro de produto';
        break;
      case '/relacao-produto':
        this.titlePage = 'Relacao de produtos';
        break;
      default:
        this.titlePage = 'Seja bem vindo!'
    }
  }

  constructor(
    private location: Location,
    private router: Router
  ) {
    
  }

  exit() {
    this.router.navigate(['/auth/login'])
  }

  updateName = (name: string) => {
    
  };
  
}
