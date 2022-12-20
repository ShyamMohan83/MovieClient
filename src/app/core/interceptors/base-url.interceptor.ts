
import { Injectable } from "@angular/core"
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({providedIn: 'root'})
export class BaseUrlInterceptor implements HttpInterceptor {
    private baseUrl = environment.serviceUrl;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(this.baseUrl);
        const modifiedUrl = `${this.baseUrl}/${req.url}`;
        const request = req.clone({
            url: modifiedUrl
        })
        return next.handle(request);
    }
}

