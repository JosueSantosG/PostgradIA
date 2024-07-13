import { Injectable } from '@angular/core';
import { ErrorService } from '../services/error.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AddtokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')
    if(token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    }
  
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 401){
           /*  this.errorService.msjError(error) */
            /* this.router.navigate(['/login']) */
          }
          return throwError(() => error);
        })
      );
  }
}
