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
import { UserDetailsBannerComponent } from './components/user-details-banner/user-details-banner.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { AccountPageComponent } from './ui/account-page/account-page.component';
import { ActorsPageComponent } from './ui/actors-page/actors-page.component';
import { MoviesPageComponent } from './ui/movies-page/movies-page.component';
import { PopularActorsListComponent } from './components/popular-actors-list/popular-actors-list.component';
import { ActorsCarouselComponent } from './components/actors-carousel/actors-carousel.component';
import { ActorDetailsPageComponent } from './ui/actor-details-page/actor-details-page.component';
import { ActorItemComponent } from './components/actor-item/actor-item.component';
import { RouterLink } from '@angular/router';
import { SerieItemComponent } from './components/serie-item/serie-item.component';
import { TopRatedSeriesListComponent } from './components/top-rated-series-list/top-rated-series-list.component';
import { TvSeriesPageComponent } from './ui/tv-series-page/tv-series-page.component';
import { SeriesOnairListComponent } from './components/series-onair-list/series-onair-list.component';
import { SerieDetailsPageComponent } from './ui/serie-details-page/serie-details-page.component';
import { MovieDetailsBannerComponent } from './components/movie-details-banner/movie-details-banner.component';
import { SerieDetailsBannerComponent } from './components/serie-details-banner/serie-details-banner.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ActorDetailsBannerComponent } from './components/actor-details-banner/actor-details-banner.component';
import { KnownForListComponent } from './components/known-for-list/known-for-list.component';
import { KnownForMovieItemComponent } from './components/known-for-movie-item/known-for-movie-item.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SearchActorsComponent } from './components/search-actors/search-actors.component';
import { SearchSeriesComponent } from './components/search-series/search-series.component';
import { SearchedMoviesListComponent } from './components/searched-movies-list/searched-movies-list.component';
import { CompanyDetailsPageComponent } from './ui/company-details-page/company-details-page.component';
import { CompanyDetailsBannerComponent } from './components/company-details-banner/company-details-banner.component';
import { SearchedSeriesListComponent } from './components/searched-series-list/searched-series-list.component';
import { SearchedActorsListComponent } from './components/searched-actors-list/searched-actors-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    UserDetailsBannerComponent,
    MovieDetailsPageComponent,
    ApprovedComponent,
    AccountPageComponent,
    ActorsPageComponent,
    MoviesPageComponent,
    PopularActorsListComponent,
    ActorsCarouselComponent,
    ActorDetailsPageComponent,
    ActorItemComponent,
    MovieDetailsBannerComponent,
    SerieItemComponent,
    TopRatedSeriesListComponent,
    TvSeriesPageComponent,
    SeriesOnairListComponent,
    SerieDetailsPageComponent,
    SerieDetailsBannerComponent,
    ActorDetailsBannerComponent,
    KnownForListComponent,
    KnownForMovieItemComponent,   
    CompanyItemComponent,
    ActorListComponent,   
    ActorDetailsBannerComponent,
    CompanyListComponent,
    SearchMoviesComponent,
    SearchActorsComponent,
    SearchSeriesComponent,
    SearchedMoviesListComponent,
    CompanyDetailsPageComponent,
    CompanyDetailsBannerComponent,
    SearchedSeriesListComponent,
    SearchedActorsListComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    RouterLink,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
