import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/actor-list-credits.interface';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent{
  
}
