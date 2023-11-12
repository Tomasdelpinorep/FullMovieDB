import { Component, Input } from '@angular/core';
import { Movies } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movies;

  getMovieImage(){
    return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path;
  }

  //viewDetails(){}
}
