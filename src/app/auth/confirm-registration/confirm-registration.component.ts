import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthActions } from '../state/action-types';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss'],
})
export class ConfirmRegistrationComponent implements OnInit {
  public confirmationSuccessMessage: string = '';
  public confirmationErrorMessage: string = '';

  public registerSuccess: boolean = false;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private action$: Actions
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      this.store.dispatch(AuthActions.confirmRegister({ token: token }));

      this.action$
        .pipe(ofType(AuthActions.confirmRegisterSuccess))
        .subscribe((res) => {
          this.confirmationSuccessMessage = '';
          this.confirmationSuccessMessage = res.successMessage;
        });

      this.action$
        .pipe(ofType(AuthActions.confirmRegisterFailure))
        .subscribe((res) => {
          this.confirmationErrorMessage = '';
          this.confirmationErrorMessage = res.errorMessage;
        });
    } else {
      this.router.navigate(['/login']);
    }
  }

  onRegisterSuccessChange(event: boolean) {
    this.registerSuccess = event;
    this.confirmationErrorMessage = '';
  }
}
