import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { NotificationService } from '../services/notification.service';

import {
  confirmPasswordValidator,
  passwordValidator,
} from '../services/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public nameMinLength: number = 2;

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(this.nameMinLength),
            Validators.pattern(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(this.nameMinLength),
            Validators.pattern(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, passwordValidator]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: confirmPasswordValidator }
    );
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    // Perform login action here

    // Notificationmessage for user
    this.notificationService.openMatSnackBar(
      `Registered with email: ${this.email.value}`,
      ''
    );
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
