import { Component, OnInit } from '@angular/core';
import { CompanyDetailsResponse } from 'src/app/models/company-details.interface';
import { ProductionCompany } from 'src/app/models/movie-details.interface';
import { CompanyService } from 'src/app/services/company.service';
import { MovieService } from 'src/app/services/movie-service.service';

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
