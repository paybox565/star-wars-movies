import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwmoviesRoutingModule } from './swmovies-routing.module';
import { SwmoviesComponent } from './swmovies.component';
import { DetailsComponent } from './details/details.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MatList, MatListItem } from '@angular/material/list';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RegidPipe } from './regid.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpCacheInterceptor } from '../http-interceptors/http-cache.interceptor';
import { MatProgressSpinner } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SwmoviesComponent,
    DetailsComponent,
    MoviesDetailsComponent,
    CharacterDetailsComponent,
    RegidPipe
  ],
    imports: [
        CommonModule,
        SwmoviesRoutingModule,
        MatList,
        MatListItem,
        MatCard,
        MatCardContent,
        MatIcon,
        MatCardTitle,
        MatProgressSpinner,

    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: httpCacheInterceptor, multi: true}
    ]
})
export class SwmoviesModule { }
