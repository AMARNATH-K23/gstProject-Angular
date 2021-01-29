import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GstserviceService } from './gstservice.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private GstserviceService: GstserviceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = localStorage.getItem('token');
        request = request.clone({
            setHeaders: {
                Authorization: `BslogiKey ${currentUser}`
            }
        });
        console.log(currentUser);
        return next.handle(request);
    }
}