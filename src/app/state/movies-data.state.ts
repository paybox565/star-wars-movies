import { Movie } from '../swmovies/movie';

export interface MoviesModel {
    movies: Movie[],
    moviesLoaded: boolean,
    characters: Movie[],
    additionalListLoaded: boolean
}
export const initialState: MoviesModel = {
    movies: [],
    moviesLoaded: false,
    characters: [],
    additionalListLoaded: false
}