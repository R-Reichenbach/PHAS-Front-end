import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordModel } from 'src/app/models/PasswordModels';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  passwordForm! : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private router: Router){ }

  ngOnInit(): void{
    this.passwordForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    }
    )
  }

  submitPassword(){
    debugger
    var dadosPassoword = this.passwordForm.getRawValue() as PasswordModel;
  }

}
