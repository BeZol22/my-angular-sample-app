import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { LoginCredentials } from '../models/user.model';

import { NotificationService } from '../services/notification.service';
import { AuthActions } from '../state/action-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router,
    private store: Store,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Perform login action here
    const userToLogin: LoginCredentials = {
      email: this.email.value,
      password: this.password.value,
    };

    this.store.dispatch(AuthActions.login({ userToLogin }));

    // SUCCESS
    this.actions$
      .pipe(ofType(AuthActions.loginSuccess), take(1))
      .subscribe((res) => {
        // this.loginSuccess = true;
        // this.loginSuccessChange.emit(this.loginSuccess);
        let notificationMessage: string = '';
        notificationMessage = res.successMessage;
        this.notificationService.openMatSnackBar(notificationMessage, '');
        this.router.navigate(['/home']);
      });

    // FAILURE
    this.actions$.pipe(ofType(AuthActions.loginFailure)).subscribe((res) => {
      let notificationMessage: string = '';
      notificationMessage = res.errorMessage;

      // Show error below email and password if "Invalid email or password."
      if (res.errorMessage === `Invalid email or password.`) {
        this.email.setErrors({
          invalidLoginEmail: res.errorMessage,
        });
        this.password.setErrors({
          invalidLoginPassword: res.errorMessage,
        });
      }

      // Show error message for server validation of email IsEmail(), which comes as an array
      if (res.errorMessage[0] === `Invalid email format.`) {
        this.email.setErrors({
          invalidEmail: res.errorMessage, // here and for notification message it's ok without [0]
        });
      }

      this.notificationService.openMatSnackBar(notificationMessage, '');
    });

    // Notificationmessage for user
    // this.notificationService.openMatSnackBar(
    //   `Logged in with email: ${this.email.value}`,
    //   ''
    // );
  }

  // Get FormControls
  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
