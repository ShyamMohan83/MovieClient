import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.getTokenFromSessionStorage();
       req = this.cloneRequest(req, token);
        return next.handle(req);
    }

    private cloneRequest(req: HttpRequest<any> , token: string | null): HttpRequest<any> {
        const request = req.clone({
            setHeaders: {authorization: `Bearer ${token}`}
        })

        return request;
    }
    private getTokenFromSessionStorage(): string | null{
        let token: string | null = '';
        if(sessionStorage.getItem('token')!) {
            token = sessionStorage.getItem('token')
        }
        return token;
    }
}