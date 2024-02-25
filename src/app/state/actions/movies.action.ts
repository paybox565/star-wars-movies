import { createAction, props } from '@ngrx/store';
import { Movie } from '../../swmovies/movie';

export const loadMovies = createAction("[Movies] Load movies")
export const loadMoviesSuccess = createAction(
    "[Movies] Load movies success",
    props<{moviesData: Movie[], moviesLoaded: boolean}>())
export const loadMoviesFailure = createAction(
    "[Movies] Load movies failure",
    props<{error: any}>())
export const loadAddList = createAction(
    "[Movie or Character] Load additional list",
    props<{urlList: string[]}>()
    )
export const loadAddListSuccess = createAction(
    "[Movie or Character] Load additional list success",
    props<{addListData: any[], addListLoaded: boolean}>())
export const loadAddListFailure = createAction(
    "[Movie or Character] Load Load additional failure",
    props<{error: any}>())
export const loadMovie = createAction(
    "[Movie or Character] Load movie",
    props<{id: string}>()
)
export const loadMovieSuccess = createAction(
    "[Movie or Character] Load movie success",
    props<{movie: Movie}>()
)
export const loadMovieChar = createAction(
    "[Movie or Character] Load movie character",
    props<{id: string}>()
)
export const loadMovieCharSuccess = createAction(
    "[Movie or Character] Load movie character success",
    props<{char: Movie}>()
)