import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsComponent implements OnInit {
    character: Movie | undefined
    characterMoviesList$: any | Observable<any> | undefined

    constructor(
        private moviesService: MoviesDataService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.getCharacterData()
    }

    getCharacterData(){
        const characterId = this.route.snapshot.paramMap.get('id') ?? '';
        const characterData$ = this.moviesService.getCharacter(characterId)

        characterData$.subscribe((data) => {
            this.character = data;
            this.characterMoviesList$ = this.moviesService.getAdditionalList(this.character?.films)
        })
    }
}
