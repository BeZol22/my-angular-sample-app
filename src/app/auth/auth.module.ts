import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

const COMPONENTS = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, AuthRoutingModule],
  // exports: [COMPONENTS],
})
export class AuthModule {}
