import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { getAdditionalList, getAddListLoaded, getMovie,  } from '../../state/selectors/movies.selector';
import { Store } from '@ngrx/store';
import { MoviesModel } from '../../state/movies-data.state';
import * as MoviesActions from '../../state/actions/movies.action';
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
    }

    ngOnDestroy() {
        this.subsciption$?.unsubscribe()
    }

}
