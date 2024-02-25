import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { MoviesModel } from '../../state/movies-data.state';
import { getAdditionalList, getAddListLoaded, getCharacter, getMovie, getMovieChar } from '../../state/selectors/movies.selector';
import * as MoviesActions from '../../state/actions/movies.action';
import { loadMovieChar } from '../../state/actions/movies.action';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { take } from 'rxjs/internal/operators/take';
import { first } from 'rxjs/internal/operators/first';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {

    currentMovieChar$: Observable<any> | undefined
    isLoading$: Observable<boolean> = new Observable<boolean>()
    charactersList$: Observable<any> | undefined
    charId: string = this.route.snapshot.paramMap.get('id') ?? '';
    subsciption$: Subscription | undefined


    constructor(
        private route: ActivatedRoute,
        private store: Store<{movies: MoviesModel}>
    ) {
        this.isLoading$ = this.store.select(getAddListLoaded)
        this.charactersList$ = this.store.select(getAdditionalList)
        this.currentMovieChar$ = this.store.select(getCharacter)
    }

    ngOnInit() {
        this.getCharData()
    }

    getCharData(){
        this.store.dispatch(MoviesActions.loadMovieChar({id: this.charId}))
        this.subsciption$ = this.currentMovieChar$?.subscribe((char: Movie) => {
            this.store.dispatch(MoviesActions.loadAddList({urlList: char.films}))
        })
    }

    ngOnDestroy() {
        this.subsciption$?.unsubscribe()
    }


}
