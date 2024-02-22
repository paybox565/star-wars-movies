import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.scss'
})
export class MoviesDetailsComponent implements OnInit {
    movie: Movie | undefined
    charactersList$: any | Observable<any> | undefined //todo add Character interface


    constructor(
        private moviesService: MoviesDataService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.getMovieData()
    }

    getMovieData(){
        const movieId = this.route.snapshot.paramMap.get('id') ?? '';
        const movieData$ = this.moviesService.getMovie(movieId)

        movieData$.subscribe((data) => {
            this.movie = data;
            this.charactersList$ = this.moviesService.getAdditionalList(this.movie?.characters)
        })

    }

}
