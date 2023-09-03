import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  welcomeForm! : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private router : Router){ }

  ngOnInit(): void{
    this.welcomeForm = this.formBuilder.group(
      {
      
      }
    );
  }

  submitWelcome(){
    debugger
  }

}
