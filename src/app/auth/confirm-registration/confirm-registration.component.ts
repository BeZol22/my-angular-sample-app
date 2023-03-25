import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../state/action-types';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss'],
})
export class ConfirmRegistrationComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      this.store.dispatch(AuthActions.confirmRegister({ token: token }));
    }
  }
}
