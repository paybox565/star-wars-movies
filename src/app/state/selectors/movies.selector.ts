import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesModel } from '../movies-data.state';

const getMoviesState = createFeatureSelector<MoviesModel>('movies')

export const getMovies = createSelector(getMoviesState, (state) => {
    return state.movies
})
export const getMovie = createSelector(getMoviesState, (state) => {
    return state.currentMovie
})
export const getMovieChar = createSelector(getMoviesState, (state) => {
    return state.currentMovie.characters
})
export const getCharacter = createSelector(getMoviesState, (state) => {
    return state.currentCharacter
})
export const getAdditionalList = createSelector(getMoviesState, (state) => {
    return state.additionalList
})
export const getMoviesLoaded = createSelector(getMoviesState, (state) => {
    return state.moviesLoaded
})
export const getAddListLoaded = createSelector(getMoviesState, (state) => {
    return state.additionalListLoaded
})