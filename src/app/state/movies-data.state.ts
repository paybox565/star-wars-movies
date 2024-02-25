import { Movie } from '../swmovies/movie';
import { MoviesEffects } from './effects/movies.effect';

export interface MoviesModel {
    movies: Movie[],
    moviesLoaded: boolean,
    additionalList: Movie[],
    additionalListLoaded: boolean,
    currentMovie: Movie,
    currentCharacter: Movie
}
export const initialState: MoviesModel = {
    movies: [],
    moviesLoaded: false,
    additionalList: [],
    additionalListLoaded: false,
    currentMovie: {
        characters: [],
        films: []
    },
    currentCharacter: {
        characters: [],
        films: []
    },
}