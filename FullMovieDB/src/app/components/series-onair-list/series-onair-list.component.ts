import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-series-onair-list',
  templateUrl: './series-onair-list.component.html',
  styleUrls: ['./series-onair-list.component.css']
})
export class SeriesOnairListComponent {

  seriesOnAirList: Serie[] = [];

  constructor(private serieService: SerieService){}

  ngOnInit(): void {
    this.serieService.getSeriesOnAir().subscribe(resp =>{
      this.seriesOnAirList = resp.results;
    })
  }
}
