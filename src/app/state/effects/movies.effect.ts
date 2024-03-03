import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesDataService } from '../../swmovies/movies-data.service';
import * as MoviesActions from '../actions/movies.action';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { exhaustMap } from 'rxjs/internal/operators/exhaustMap';

@Injectable()
export class MoviesEffects {

    constructor(
        private actions$: Actions,
        private moviesService: MoviesDataService
    ) {    }

    loadMoviesData$ = createEffect(() =>
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
    loadMovie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MoviesActions.loadMovie),
            exhaustMap(action => {
                return this.moviesService.getMovie(action.id).pipe(
                    map(movie => MoviesActions.loadMovieSuccess({movie})),
                    catchError(error => [MoviesActions.loadMoviesFailure({error})])
                )
            })
        )
        }
    )
    loadCharacter$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(MoviesActions.loadMovieChar),
                exhaustMap(action => {
                    return this.moviesService.getCharacter(action.id).pipe(
                        map(char => MoviesActions.loadMovieCharSuccess({char})),
                        catchError(error => [MoviesActions.loadMoviesFailure({error})])
                    )
                })
            )
        }
    )

    loadAddListCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MoviesActions.loadMovieSuccess),
            exhaustMap((data) => {
                return this.moviesService.getAdditionalList(data.movie.characters).pipe(
                    map(data => MoviesActions.loadAddListSuccess({addListData: data, addListLoaded: true})),
                    catchError(error => [MoviesActions.loadMoviesFailure({error})])
                )
            })

        )
    })

    loadAddListFilms$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MoviesActions.loadMovieCharSuccess),
            exhaustMap((data) => {
                return this.moviesService.getAdditionalList(data.char.films).pipe(
                    map(data => MoviesActions.loadAddListSuccess({addListData: data, addListLoaded: true})),
                    catchError(error => [MoviesActions.loadMoviesFailure({error})])
                )
            })

        )
    })
}