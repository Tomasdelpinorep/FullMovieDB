import { Component, OnInit } from '@angular/core';
import { AccountDetailsResponse } from 'src/app/models/account-details.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit{
 
account !:AccountDetailsResponse;
movieListFavourite: Movie[] = [];
movieListWatchList: Movie[] = [];
numOfFavouriteMovies: number = 0;
numOfWatchListMovies: number = 0;
constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.account = resp;
    });

    this.accountService.getFavoriteMovies().subscribe(resp => {
      this.movieListFavourite = resp.results;
      this.numOfFavouriteMovies = resp.results.length;
    });

    this.accountService.getWatchListMovies().subscribe(resp => {    
      this.movieListWatchList = resp.results;
      this.numOfWatchListMovies
    }); 
  }

  getAvatarImg(){
    return `https://www.gravatar.com/avatar/${this.account.avatar.tmdb.avatar_path}`;
  }

  

}