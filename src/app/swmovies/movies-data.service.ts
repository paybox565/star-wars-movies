import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { merge } from 'rxjs/internal/operators/merge';
import { mergeWith } from 'rxjs/internal/operators/mergeWith';
import { concatAll } from 'rxjs/internal/operators/concatAll';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

    private swAPI = 'https://swapi.dev/api/';
    private cache = new Map();

    constructor(private http: HttpClient) { }

    getMovies(): Observable<any> {
        const url = this.swAPI + 'films/';
        return this.cacheHttpReq(this.cache, url)
    }

    getMovie(id: string): Observable<any> {
        const url = this.swAPI + 'films/' + id;
        return this.cacheHttpReq(this.cache, url)
    }
    // getAdditionalList (dataArray: string[] = []): Observable<any> {
    //     const data = dataArray.map(url => this.cacheHttpReq(this.cache, url))
    //     return forkJoin(data)
    // }

    getAdditionalList(dataArray: string[]): Observable<any> {
        const data = dataArray.map(url => this.cacheHttpReq(this.cache, url))
        return forkJoin(data)
    }

    getCharacter(id: string): Observable<any> {
        const url = this.swAPI + 'people/' + id;
        return this.cacheHttpReq(this.cache, url)
    }

    cacheHttpReq(cache: Map<any, any>, url: string){
        if (!cache.get(url)) {
            cache.set(url, this.http.get(url).pipe(
                shareReplay(1)
            ))
        }
        return cache.get(url);
    }
}
