import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceService } from "@app/auth";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";


@Injectable()
export class JwtInerceptor implements HttpInterceptor {
    constructor(
        private authService: ServiceService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authService.userValue;
        const isLoggedIn = user.token;
        const isAPiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isAPiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user.token}` }
            });
        }

        return next.handle(request);
         
    }
}
