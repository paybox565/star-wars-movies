import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatList, MatListItem } from '@angular/material/list';
import { httpCacheInterceptor } from './http-interceptors/http-cache.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './state/reducers/movies.reducer';
import { MoviesEffects } from './state/effects/movies.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      MatList,
      MatListItem,
      EffectsModule.forRoot([MoviesEffects]),
      StoreModule.forRoot({movies: moviesReducer}, {}),
  ],
  providers: [
    provideAnimationsAsync(),
    //{provide: HTTP_INTERCEPTORS, useClass: httpCacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
