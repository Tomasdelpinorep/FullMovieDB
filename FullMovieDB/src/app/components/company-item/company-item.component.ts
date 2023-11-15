import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsResponse } from 'src/app/models/company-details.interface';
import { MovieDetailsResponse, ProductionCompany } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent{

  @Input() company!: ProductionCompany;

    getCompanyImage(){
      return `https://image.tmdb.org/t/p/w500/${this.company.logo_path}`;
    }

}
