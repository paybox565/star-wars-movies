import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from '../actions/movies.action';
import { initialState } from '../movies-data.state';

export const moviesReducer = createReducer(
    initialState,
    on(MoviesActions.loadMoviesSuccess, (state, {moviesData, moviesLoaded}) => {
        return {
            ...state,
            movies: moviesData,
            moviesLoaded: moviesLoaded
        }
    }),
    on(MoviesActions.loadMoviesFailure, (state, {error}) => state),
    on(MoviesActions.loadMovieSuccess, (state, {movie}) => {
        return {
            ...state,
            currentMovie: movie,
            currentCharacter: {
                characters: [],
                films: []
            },
            additionalList: [],
            additionalListLoaded: false
        }
    }),
    on(MoviesActions.loadAddListSuccess, (state, {addListData, addListLoaded}) => {
        return {
            ...state,
            additionalList: addListData,
            additionalListLoaded: addListLoaded
        }
    }),
    on(MoviesActions.loadAddListFailure, (state, {error}) => state),
    on(MoviesActions.loadMovieCharSuccess, (state, {char}) => {
        return {
            ...state,
            currentCharacter: char,
            currentMovie: {
                characters: [],
                films: []
            },
            additionalList: [],
            additionalListLoaded: false
        }
    }),
)