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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
