import { createAction, props } from '@ngrx/store';
import { Movie } from '../../swmovies/movie';

export const loadMovies = createAction("[Movies] Load movies")
export const loadMoviesSuccess = createAction(
    "[Movies] Load movies success",
    props<{moviesData: Movie[], moviesLoaded: boolean}>())
export const loadMoviesFailure = createAction(
    "[Movies] Load movies failure",
    props<{error: any}>())