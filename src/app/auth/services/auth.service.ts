import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUser, LoginCredentials } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = environment.baseUrl;
  errorMessage: string = '';

  constructor(private httpClient: HttpClient) {}

  public login(userToLogin: LoginCredentials): Observable<any> {
    const url = `${this.URL}/auth/login`;
    // const params = JSON.stringify(userToAdd);
    const params = userToLogin;
    return this.httpClient.post<LoginCredentials>(url, params, {
      observe: 'response',
    });
  }

  public register(userToAdd: CreateUser): Observable<any> {
    const url = `${this.URL}/auth/register`;
    // const params = JSON.stringify(userToAdd);
    const params = userToAdd;
    return this.httpClient.post<CreateUser>(url, params, {
      observe: 'response',
    });
  }

  public confirmRegistration(token: string): Observable<any> {
    return this.httpClient.post(`${this.URL}/auth/confirm-registration`, {
      token,
    });
  }
}
