import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginModel } from 'src/app/models/LoginModel';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  submitLogin() {
    const email = document.querySelector('input[type="email"]') as HTMLInputElement; // obtém o campo de e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expressão regular para validar o e-mail
   
    if (email.value.trim() === '') {
      // O campo de e-mail está vazio, exibe um alerta
      alert('Please, enter your e-mail address for continue.');
    } else if (!emailRegex.test(email.value)) {
      // O campo de e-mail não é válido, exibe um alerta
      alert('Please, enter a valid e-mail address.');
    } else {
      // O campo de e-mail é válido, navegue para outra página
      this.router.navigate(['/password']);
    }

  }
}
