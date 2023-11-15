import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsResponse } from 'src/app/models/company-details.interface';
import { ProductionCompany } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit{

    @Input() movieId!: number;
    company!: ProductionCompany[];
    @Output() serieClick = new EventEmitter <number>;
   
    constructor(private movieService: MovieService) {}

    getMovieImage(){
      return 'https://image.tmdb.org/t/p/w500/'+this.company.logo_path;
    }

    ngOnInit(): void {
      this.movieService.getFilmById(this.movieId).subscribe(resp =>{
        this.company = resp.production_companies
      })
    }

}
