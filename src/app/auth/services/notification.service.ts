import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  openMatSnackBar(message: string, action: string) {
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    config.horizontalPosition = 'center';
    this.snackBar.open(message, action, config);
  }
}
