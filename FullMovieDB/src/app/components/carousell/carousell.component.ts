import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TrendingMovie } from 'src/app/models/trending-movies';
import { MovieService } from 'src/app/services/movie-service.service';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css']
})
export class CarousellComponent implements OnInit{
	currentPage = 1;
	trendingMovieBackDrops:String[] = [];
	showNavigationArrows = true;
	showNavigationIndicators = false;

	constructor(config: NgbCarouselConfig, private movieService :MovieService) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}

	ngOnInit(): void {
		this.movieService.getTrendingMoviesList().subscribe(resp => {
			this.trendingMovieBackDrops = this.getTrendingMoviesBackDrops(resp.results);
		})
	}

	getTrendingMoviesBackDrops(trendingMovieList: TrendingMovie[]){
		var trendingBackDrops = [];
		for (const m of trendingMovieList){
				
		}
		return trendingBackDrops;
	}
}