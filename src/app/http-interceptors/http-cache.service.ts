import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

    cache: { [key: string]: HttpResponse<any> } = {};

    constructor() { }

    get(req: HttpRequest<any>): HttpResponse<any> {
        return this.cache[req.urlWithParams];
    }
    put(req: HttpRequest<any>, res: HttpResponse<any>): void {
        this.cache[req.urlWithParams] = res;
    }
    delete(req: HttpRequest<any>): boolean {
        const cachedRequest = this.get(req);
        let returnVal = false;
        if (cachedRequest) {
            delete this.cache[req.urlWithParams];
            returnVal = true;
        }
        return returnVal;
    }


}
