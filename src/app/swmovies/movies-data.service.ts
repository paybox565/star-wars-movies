import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map } from 'rxjs/internal/operators/map';
import { mergeAll } from 'rxjs/internal/operators/mergeAll';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { toArray } from 'rxjs/internal/operators/toArray';
import { of } from 'rxjs/internal/observable/of';
import { merge } from 'rxjs/internal/operators/merge';
import { mergeWith } from 'rxjs/internal/operators/mergeWith';
import { concatAll } from 'rxjs/internal/operators/concatAll';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

    private swAPI = 'https://swapi.dev/api/';
    private cache = new Map();

    constructor(private http: HttpClient) { }

    getMovies(): Observable<any> {
        const url = this.swAPI + 'films/';
        return this.http.get(url).pipe(
            map((movies: any) => movies?.results || [])
        )
    }

    getMovie(id: string): Observable<any> {
        const url = this.swAPI + 'films/' + id;
        return this.http.get(url)
    }
    getAdditionalList (dataArray: string[] = []) {
        const data = dataArray.map(url => this.http.get(url))
        return forkJoin(data)
    }

    getCharacter(id: string): Observable<any> {
        const url = this.swAPI + 'people/' + id;
        return this.http.get(url)
    }
}
