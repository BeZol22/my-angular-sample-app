import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-sample-app';
  // showSearchSubmenu: boolean = false;
  // showSellSubmenu: boolean = false;

  // Inject MatSidenav as a ViewChild
  @ViewChild(MatSidenav, { static: false })
  sidenav?: MatSidenav;

  constructor(private router: Router) {}

  goToLogin() {
    // Close the sidenav before navigating to the 'auth' route
    this.sidenav?.close();
    // Navigate to the 'auth' route using the Router service
    this.router.navigate(['/auth/login']);
  }

  goToRegister() {
    // Close the sidenav before navigating to the 'auth' route
    this.sidenav?.close();
    // Navigate to the 'auth' route using the Router service
    this.router.navigate(['/auth/register']);
  }
}
