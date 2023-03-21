import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  errorMessage: string = '';

  constructor(private httpClient: HttpClient) {}

  public register(userToAdd: CreateUser): Observable<any> {
    const url = 'http://localhost:3000/auth/register';
    // const params = JSON.stringify(userToAdd);
    const params = userToAdd;
    return this.httpClient.post<CreateUser>(url, params, {
      observe: 'response',
    });
  }
}
