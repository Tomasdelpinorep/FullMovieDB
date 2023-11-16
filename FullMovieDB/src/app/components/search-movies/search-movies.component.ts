import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {
  constructor(private movieService :MovieService){
    
  }
}
