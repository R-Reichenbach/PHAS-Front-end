import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'password',
  },
  {
    path: 'password',
    component: PasswordComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register',
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
