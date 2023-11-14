import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details-banner',
  templateUrl: './movie-details-banner.component.html',
  styleUrls: ['./movie-details-banner.component.css']
})
export class MovieDetailsBannerComponent implements OnInit{
  
  route: ActivatedRoute = inject(ActivatedRoute);
  movieDetail!: MovieDetailsResponse;
  movieId: number = 0;
  genderList: Genre[] = [];
  releaseDate: string = '';
  runtime: number = 0;

  constructor(private movieService: MovieService){
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.movieService.getFilmById(this.movieId).subscribe(resp=>{
      this.movieDetail = resp;
      this.genderList = resp.genres;
      this.releaseDate = resp.release_date;
      this.runtime = resp.runtime;
    })
  }
  
  getMovieImage(){
    return `https://image.tmdb.org/t/p/w220_and_h330_face${this.movieDetail.poster_path}`;
  }


}
