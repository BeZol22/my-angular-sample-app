import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      // Add the JWT token to the Authorization header
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (!req.headers.has('Content-Type')) {
      // Set the content type header to JSON if it's not set already
      req = req.clone({
        setHeaders: {
          'content-type': 'application/json',
        },
      });
    }

    if (req.headers.get('content-type') === 'multipart/form-data') {
      // Delete the content type header
      req = req.clone({
        headers: req.headers.delete('content-type'),
      });
    }

    // // Set the accept header to JSON if it's not set already
    // req = req.clone({
    //   setHeaders: {
    //     Accept: 'application/json',
    //   },
    // });

    return next.handle(req);
  }
}
