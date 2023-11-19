import { Component } from '@angular/core';
import { Movies } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  searchedMovieList: Movies[] = [];

  isSearchEmpty() {
    if (this.searchedMovieList.length == 0) return true;

    return false;
  }

  loadSearchedList(event :any){
    this.searchedMovieList = event;
  }
}
