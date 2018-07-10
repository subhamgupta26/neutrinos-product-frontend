import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

  // Get the auth header from the service.
      if (req.url.includes('/public')) {
      return next.handle(req);
    }
    const authHeader = this.auth.getAuthorizationHeader();
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader)
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);

    // .do((event: HttpEvent<any>) => {
      // if the event is for http response
    //  if (event instanceof HttpResponse) {
  //    }
  //  }, (err: any) => {
      // if any error (not for just HttpResponse) we stop our loader bar
   //   this.spinnerService.hide();
  //  });
  // return next.handle(req);
}
}
