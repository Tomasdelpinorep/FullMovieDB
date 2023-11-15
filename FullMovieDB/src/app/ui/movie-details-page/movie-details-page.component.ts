import { Component } from '@angular/core';
import { ProductionCompany } from 'src/app/models/movie-details.interface';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent{
  movieId: number = 0;

  setMovieId($event: number) {
    this.movieId = $event;
  }
  
}
