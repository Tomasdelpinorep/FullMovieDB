import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'', pathMatch:'full',redirectTo:'/home'},
  {path:'*', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
