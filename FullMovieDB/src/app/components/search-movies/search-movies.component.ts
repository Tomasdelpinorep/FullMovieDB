import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {
  constructor(private movieService :MovieService){}
  searchedMovieList :Movie[] = [];
  @Output() sendSearchedMovieList = new EventEmitter<Movie[]>();

  onEnter(searchQuery :string){
    this.movieService.getMovieListWithQuery(searchQuery).subscribe(resp => {
      this.searchedMovieList = resp.results;
      this.sendSearchedMovieList.emit(this.searchedMovieList);
    })
  }
}
