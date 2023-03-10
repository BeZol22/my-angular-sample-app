import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  regex1 = /(?=.*[a-z])/; // Must contain at least one lowercase character
  regex2 = /(?=.*[A-Z])/; // Must contain at least one uppercase character
  regex3 = /(?=.*\d)/; // Must contain at least one digit
  regex4 = /(?=.*[@$!%*?&])/; // Must contain at least one special character
  regex5 = /^.{8,}$/; // Must be at least 8 characters long

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.passwordValidator = this.passwordValidator.bind(this);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  passwordValidator(control: FormControl) {
    const password = control.value;

    if (!this.regex1.test(password)) {
      return { regex1: true };
    }

    if (!this.regex2.test(password)) {
      return { regex2: true };
    }

    if (!this.regex3.test(password)) {
      return { regex3: true };
    }

    if (!this.regex4.test(password)) {
      return { regex4: true };
    }

    if (!this.regex5.test(password)) {
      return { regex5: true };
    }

    return null;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Perform login action here

    // Notificationmessage for user
    this.openMatSnackBar(`Logged in with email: ${this.email.value}`, '');
  }

  // Config for Notificationmessage
  openMatSnackBar(message: string, action: string) {
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    config.horizontalPosition = 'center';
    this.snackBar.open(message, action, config);
  }

  // Get FormControls
  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
