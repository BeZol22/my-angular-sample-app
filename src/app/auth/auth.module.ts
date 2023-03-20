import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputTextFieldComponent } from '../components/input-text-field/input-text-field.component';
import { NotificationService } from './services/notification.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth.reducer';

const COMPONENTS = [LoginComponent, RegisterComponent, InputTextFieldComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  // exports: [COMPONENTS],
  providers: [NotificationService],
})
export class AuthModule {}
