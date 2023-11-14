import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movies;
  @Output() movieClick = new EventEmitter<number>;
  
  getMovieImage(){
    return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path;
  }

}
