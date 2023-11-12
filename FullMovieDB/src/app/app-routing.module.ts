import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { MovieDetailsPageComponent } from './ui/movie-details-page/movie-details-page.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'', pathMatch:'full',redirectTo:'/home'},
  {path:'movie/:id',component:MovieDetailsPageComponent},
  {path:'*', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
