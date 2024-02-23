import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpInterceptorFn,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpCacheService } from './http-cache.service';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { finalize } from 'rxjs/internal/operators/finalize';

@Injectable()
export class httpCacheInterceptor implements HttpInterceptor {
    constructor(private _cache: HttpCacheService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cachedResponse: HttpResponse<any>;
        if (request.method === 'GET') {
            cachedResponse = this._cache.get(request);
        }

        return next.handle(request)
            .pipe(
                tap<HttpEvent<any>>((httpEvent: HttpEvent<any>) => {
                    if (httpEvent instanceof HttpResponse) {
                        this._cache.put(request, httpEvent);
                    }
                    if (cachedResponse) {
                        return cachedResponse
                    }
                    else {
                        return httpEvent
                    }
                    //return cachedResponse ? cachedResponse : httpEvent;
                }),
                catchError((err: HttpErrorResponse) => {
                    throw err;
                })
            );
    }
}