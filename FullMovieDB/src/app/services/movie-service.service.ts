import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PopularMoviesResponse } from '../models/top-rated-list';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMoviesList(page: number): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=fba6287e1b5585e45727ead4703af755`
    );
  }
}