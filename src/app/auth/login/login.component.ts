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
  public passwordMinLength: number = 8;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(this.passwordMinLength)],
      ],
    });
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
