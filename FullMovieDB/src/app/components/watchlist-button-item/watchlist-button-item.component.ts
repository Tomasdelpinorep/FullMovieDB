import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-watchlist-button-item',
  templateUrl: './watchlist-button-item.component.html',
  styleUrls: ['./watchlist-button-item.component.css']
})
export class WatchlistButtonItemComponent {

  @Input() movie!: Movie;

  constructor(private accountService: AccountService){}

  addToWatchList(id: number){
    this.accountService.addMovieToWatchList(id).subscribe();
  }
}
