import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { skip, take } from 'rxjs';
import { CreateUser } from '../models/user.model';

import { NotificationService } from '../services/notification.service';

import {
  confirmPasswordValidator,
  passwordValidator,
  confirmEmailValidator,
} from '../services/password.validator';
import { AuthActions } from '../state/action-types';
import { getErrorMessage } from '../state/auth.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public nameMinLength: number = 2;
  public notificationMessage: string = '';
  @Output() registerSuccessChange = new EventEmitter<boolean>();
  public registerSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private store: Store,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(this.nameMinLength),
            Validators.pattern(
              /^[A-ZÄÁÉÚŐÓÜÖÍ][a-zäáéúőóüöíß]*( [A-ZÄÁÉÚŐÓÜÖÍ][a-zäáéúőóüöíß]*)*$/
            ),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(this.nameMinLength),
            Validators.pattern(
              /^[A-ZÄÁÉÚŐÓÜÖÍ][a-zäáéúőóüöíß]*( [A-ZÄÁÉÚŐÓÜÖÍ][a-zäáéúőóüöíß]*)*$/
            ),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordValidator]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: [confirmPasswordValidator, confirmEmailValidator] }
    );
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    // Perform register action here
    const userToAdd: CreateUser = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value,
    };

    this.store.dispatch(AuthActions.register({ userToAdd }));

    // Succesfull

    // Notificationmessage for user
    this.actions$
      .pipe(ofType(AuthActions.registerSuccess), take(1))
      .subscribe((res) => {
        this.registerSuccess = true;
        this.registerSuccessChange.emit(this.registerSuccess);
        this.notificationMessage = res.successMessage;
        this.notificationService.openMatSnackBar(this.notificationMessage, '');
      });

    // Unsuccesfull

    // Notificationmessage for user
    this.actions$.pipe(ofType(AuthActions.registerFailure)).subscribe((res) => {
      this.notificationMessage = '';
      this.notificationMessage = res.errorMessage;

      // Show error below email if email already exists
      if (
        res.errorMessage ===
        `User with email "${this.email.value}" already exists.`
      ) {
        this.email.setErrors({
          emailAlreadyExists: res.errorMessage,
        });
      }
      // Show error message for server validation of email IsEmail(), which comes as an array
      if (res.errorMessage[0] === `Invalid email format.`) {
        this.email.setErrors({
          invalidEmail: res.errorMessage, // here and for notification message it's ok without [0]
        });
      }

      this.notificationService.openMatSnackBar(this.notificationMessage, '');
    });

    // this.store.select(getErrorMessage).subscribe((msg) => {
    //   console.log('MSG OF ERROR: ', msg);
    //   this.errorMessage = msg;
    // });
  }

  // Get FormControls
  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get confirmEmail(): FormControl {
    return this.registerForm.get('confirmEmail') as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
}
