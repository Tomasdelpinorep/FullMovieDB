import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { PopularMovie } from 'src/app/models/popular-movie-list';
import { TrendingMovie, TrendingMoviesResponse } from 'src/app/models/trending-movies';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css']
})
export class CarousellComponent implements OnInit{
	currentPage = 1;
	movieList: PopularMovie[] = [];
	showNavigationArrows = true;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig, private movieService :MovieService) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}

	ngOnInit(): void {
		this.movieService.getPopularMoviesList(this.currentPage).subscribe(resp => {
			this.movieList = resp.results;

		})
	}

	getFeaturedMoviesPosterPath(trendingMovieList: TrendingMovie[]){
		for const m of trendingMovieList{
			
		}
	}
}