import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  @Output() movieClick = new EventEmitter<number>;
  
  getMovieImage(){

    if (this.movie.poster_path == null) {
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    }
    return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path;
  }

}
