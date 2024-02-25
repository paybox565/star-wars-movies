import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { Observable } from 'rxjs/internal/Observable';
import { getAdditionalList, getAddListLoaded, getMovie, getMovieChar } from '../../state/selectors/movies.selector';
import { Store } from '@ngrx/store';
import { MoviesModel } from '../../state/movies-data.state';
import * as MoviesActions from '../../state/actions/movies.action';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { take } from 'rxjs/internal/operators/take';
import { first } from 'rxjs/internal/operators/first';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.scss'
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {

    currentMovie$: Observable<any> | undefined
    isLoading$: Observable<boolean> = new Observable<boolean>()
    charactersList$: Observable<any> | undefined
    movieId: string = this.route.snapshot.paramMap.get('id') ?? '';
    subsciption$: Subscription | undefined


    constructor(
        private route: ActivatedRoute,
        private store: Store<{movies: MoviesModel}>
    ) {
        this.isLoading$ = this.store.select(getAddListLoaded)
        this.charactersList$ = this.store.select(getAdditionalList)
        this.currentMovie$ = this.store.select(getMovie)
    }

    ngOnInit() {
        this.getMovieData()
    }

    getMovieData(){
        this.store.dispatch(MoviesActions.loadMovie({id: this.movieId}))
        this.subsciption$ = this.currentMovie$?.subscribe((movie: Movie) => {
            this.store.dispatch(MoviesActions.loadAddList({urlList: movie.characters}))
        })
    }

    ngOnDestroy() {
        this.subsciption$?.unsubscribe()
    }

}
