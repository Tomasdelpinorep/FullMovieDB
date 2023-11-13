import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent {

  @Input() serie!: Serie;
  @Output() serieClick = new EventEmitter <number>;

  getSerieImage(){
    return 'https://image.tmdb.org/t/p/w500/'+this.serie.poster_path;
  }
}
