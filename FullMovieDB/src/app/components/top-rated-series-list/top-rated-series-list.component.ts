import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-top-rated-series-list',
  templateUrl: './top-rated-series-list.component.html',
  styleUrls: ['./top-rated-series-list.component.css']
})
export class TopRatedSeriesListComponent {

  topRatedList: Serie[] = [];

  constructor(private serieService: SerieService){}

  ngOnInit(): void {
    this.serieService.getTopRatedSeries().subscribe(resp =>{
      this.topRatedList = resp.results;
    })
  }
}
