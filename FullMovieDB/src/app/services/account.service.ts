import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { environment } from 'src/environments/environment';
import { MovieListResponse } from '../models/movie-list.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  getAccountDetails() :Observable<AccountDetailsResponse>{
    return this.http.get<AccountDetailsResponse>
    (`https://api.themoviedb.org/3/account?api_key=${environment.apiKey}&session_id=${sessionStorage.getItem('SESSION_ID')}`);
  }

  getWatchListMovies(): Observable<MovieListResponse>{
    let accountId = sessionStorage.getItem('ACCOUNT_ID');
    let sessionId = sessionStorage.getItem('SESSION_ID');
    return this.http.get<MovieListResponse>
    (`https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${environment.apiKey}&session_id=${sessionId}`);
  }

  getFavoriteMovies(): Observable<MovieListResponse>{
    let accountId = sessionStorage.getItem('ACCOUNT_ID');
    let sessionId = sessionStorage.getItem('SESSION_ID');
    return this.http.get<MovieListResponse>
    (`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${environment.apiKey}&session_id=${sessionId}`);
  }
}
