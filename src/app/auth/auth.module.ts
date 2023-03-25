import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';

const COMPONENTS = [
  LoginComponent,
  RegisterComponent,
  InputTextFieldComponent,
  ConfirmRegistrationComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  // exports: [COMPONENTS],
  providers: [NotificationService, AuthService],
})
export class AuthModule {
  // static forRoot(): ModuleWithProviders<AuthModule> {
  //   return {
  //     ngModule: AuthModule,
  //     providers: [AuthService],
  //   };
  // }
}
