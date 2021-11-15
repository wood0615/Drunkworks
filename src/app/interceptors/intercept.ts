import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomInterceptor implements HttpInterceptor { 
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //headers.append('Access-Control-Allow-Origin', '*');
        request = request.clone({
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'mode': "no-cors"
            })
        });
    
        return next.handle(request);
    }
}