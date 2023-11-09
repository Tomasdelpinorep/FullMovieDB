import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-popular-movies-list',
  templateUrl: './popular-movies-list.component.html',
  styleUrls: ['./popular-movies-list.component.css']
})
export class PopularMoviesListComponent implements OnInit{

  popularList: Movies[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getPopularMoviesList().subscribe(resp =>{
      this.popularList = resp.results;
    })
  }
}
