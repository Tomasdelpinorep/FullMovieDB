import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/actor-list-credits.interface';
import { Actor } from 'src/app/models/actor-list.interface';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface'
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent {

  @Input() movieId!: number;
  actorsList!: Actor[];
  cast!: Cast[];
  movie!: MovieDetailsResponse;
  
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getFilmById(this.movieId).subscribe(resp => {
      this.movie = resp;
    });

    this.movieService.getCreditsByMovie(this.movieId).subscribe(resp => {
      this.cast = resp.cast;
    });
  }
}
