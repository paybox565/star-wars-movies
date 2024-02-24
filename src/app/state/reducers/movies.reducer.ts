import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.action';
import { initialState, MoviesModel } from '../movies-data.state';

export const moviesReducer = createReducer(
    initialState,
    on(MoviesActions.loadMoviesSuccess, (state, {moviesData, moviesLoaded}) => {
        return {
            ...state,
            movies: moviesData,
            moviesLoaded: moviesLoaded
        }
    }),
    on(MoviesActions.loadMoviesFailure, (state, {error}) => initialState)
)