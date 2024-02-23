import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MoviesDataService } from './movies-data.service';

@Component({
  selector: 'app-swmovies',
  templateUrl: './swmovies.component.html',
  styleUrl: './swmovies.component.scss'
})
export class SwmoviesComponent implements OnInit {

    movies: Movie[] = []
    isLoading: boolean = true

    constructor(private moviesService: MoviesDataService) {
    }

    ngOnInit() {
        this.getMovies()
    }

    getMovies(){
        this.moviesService.getMovies().subscribe((data) => {
            this.isLoading = false
            this.movies = data
        })
    }

}
