import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { MoviesModel } from '../../state/movies-data.state';
import { getAdditionalList, getAddListLoaded, getCharacter } from '../../state/selectors/movies.selector';
import * as MoviesActions from '../../state/actions/movies.action';
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
    }

    ngOnDestroy() {
        this.subsciption$?.unsubscribe()
    }


}
