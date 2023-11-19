import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-searched-movies-list',
  templateUrl: './searched-movies-list.component.html',
  styleUrls: ['./searched-movies-list.component.css']
})
export class SearchedMoviesListComponent {
  @Input() searchedMovieList! :Movies[];
}
