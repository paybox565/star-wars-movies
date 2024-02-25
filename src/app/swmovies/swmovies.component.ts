import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import * as MoviesActions from '../state/actions/movies.action';
import { getMovies, getMoviesLoaded } from '../state/selectors/movies.selector';
import { MoviesModel } from '../state/movies-data.state';

@Component({
  selector: 'app-swmovies',
  templateUrl: './swmovies.component.html',
  styleUrl: './swmovies.component.scss'
})
export class SwmoviesComponent implements OnInit {

    isLoading$: Observable<boolean> = new Observable<boolean>()
    moviesData$: Observable<any> | undefined

    constructor(
        private store: Store<{movies: MoviesModel}>
    ) {
        this.isLoading$ = this.store.select(getMoviesLoaded)
        this.moviesData$ = this.store.select(getMovies)
    }

    ngOnInit() {
        this.store.dispatch(MoviesActions.loadMovies())
    }

}
