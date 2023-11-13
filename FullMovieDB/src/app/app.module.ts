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
import { ActorsPageComponent } from './ui/actors-page/actors-page.component';
import { SeriesPageComponent } from './ui/series-page/series-page.component';
import { MoviesPageComponent } from './ui/movies-page/movies-page.component';
import { PopularActorsListComponent } from './components/popular-actors-list/popular-actors-list.component';
import { ActorsCarouselComponent } from './components/actors-carousel/actors-carousel.component';
import { ActorDetailsPageComponent } from './ui/actor-details-page/actor-details-page.component';
import { ActorItemComponent } from './components/actor-item/actor-item.component';

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
    ActorsPageComponent,
    SeriesPageComponent,
    MoviesPageComponent,
    PopularActorsListComponent,
    ActorsCarouselComponent,
    ActorDetailsPageComponent,
    ActorItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
