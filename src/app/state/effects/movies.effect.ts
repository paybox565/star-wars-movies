import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesDataService } from '../../swmovies/movies-data.service';
import * as MoviesActions from '../actions/movies.action';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class MoviesEffects {
    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MoviesActions.loadMovies),
            mergeMap(() =>
                this.moviesService.getMovies().pipe(
                    map(data => data.results),
                    map(movies => MoviesActions.loadMoviesSuccess({moviesData: movies, moviesLoaded: true})),
                    catchError(error => [MoviesActions.loadMoviesFailure({error})])
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private moviesService: MoviesDataService
    ) {
    }
}