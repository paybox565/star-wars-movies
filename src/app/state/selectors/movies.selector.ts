import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesModel } from '../movies-data.state';

const getMoviesState = createFeatureSelector<MoviesModel>('movies')

export const getMovies = createSelector(getMoviesState, (state) => {
    return state.movies
})
export const getCharacters = createSelector(getMoviesState, (state) => {
    return state.characters
})
export const getMoviesLoaded = createSelector(getMoviesState, (state) => {
    return state.moviesLoaded
})