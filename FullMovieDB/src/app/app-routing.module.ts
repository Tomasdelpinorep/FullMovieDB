import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { AccountPageComponent } from './ui/account-page/account-page.component';
import { ActorsPageComponent } from './ui/actors-page/actors-page.component';
import { SeriesPageComponent } from './ui/series-page/series-page.component';
import { MoviesPageComponent } from './ui/movies-page/movies-page.component';
import { ActorDetailsPageComponent } from './ui/actor-details-page/actor-details-page.component';
import { TvSeriesPageComponent } from './ui/tv-series-page/tv-series-page.component';
import { SerieDetailsPageComponent } from './ui/serie-details-page/serie-details-page.component';


const routes: Routes = [
  {path:'home', component: HomePageComponent},
  {path:'', pathMatch:'full',redirectTo:'/home'},
  {path:'movie/:id',component:MovieDetailsPageComponent},
  {path: 'tv', component: TvSeriesPageComponent},
  {path: 'tv/:id', component: SerieDetailsPageComponent},
  {path:'approved',component:ApprovedComponent},
  {path:'account',component:AccountPageComponent},
  {path:'actors', component: ActorsPageComponent},
  {path:'series', component: SeriesPageComponent},
  {path:'movies', component: MoviesPageComponent},
  {path:'actor/:id', component: ActorDetailsPageComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
