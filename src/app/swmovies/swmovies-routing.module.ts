import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwmoviesComponent } from './swmovies.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const routes: Routes = [
    { path: '', component: SwmoviesComponent },
    { path: 'movies/:id', component: MoviesDetailsComponent },
    { path: 'characters/:id', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwmoviesRoutingModule { }
