import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-upcoming-movies-list',
  templateUrl: './upcoming-movies-list.component.html',
  styleUrls: ['./upcoming-movies-list.component.css']
})
export class UpcomingMoviesListComponent implements OnInit{

  upcomingList: Movie[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getUpcomingMoviesList().subscribe(resp =>{
      this.upcomingList = resp.results;
    })
  }

}
