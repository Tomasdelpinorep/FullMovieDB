import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousellComponent } from './components/carousell/carousell.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpcomingMoviesListComponent } from './components/upcoming-movies-list/upcoming-movies-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularMoviesListComponent } from './components/popular-movies-list/popular-movies-list.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { AccountPageComponent } from './ui/account-page/account-page.component';
import { RouterLink } from '@angular/router';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { TopRatedSeriesListComponent } from './components/top-rated-series-list/top-rated-series-list.component';
import { TvSeriesPageComponent } from './ui/tv-series-page/tv-series-page.component';
import { SeriesOnairListComponent } from './components/series-onair-list/series-onair-list.component';
import { SerieDetailsPageComponent } from './ui/serie-details-page/serie-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarousellComponent,
    HomePageComponent,
    PageNotFoundComponent,
    UpcomingMoviesListComponent,
    MovieItemComponent,
    PopularMoviesListComponent,
    MovieDetailsPageComponent,
    ApprovedComponent,
    AccountPageComponent,
    SerieItemComponent,
    TopRatedSeriesListComponent,
    TvSeriesPageComponent,
    SeriesOnairListComponent,
    SerieDetailsPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
