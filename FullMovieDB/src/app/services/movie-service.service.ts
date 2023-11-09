import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieListResponse } from '../models/movie-list.interface';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMoviesList(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>
    ('https://api.themoviedb.org/3/movie/popular?api_key=fba6287e1b5585e45727ead4703af755');
  }

  getUpcomingMoviesList(): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>
    ('https://api.themoviedb.org/3/movie/upcoming?api_key=02bd87fa25457bdbc212118905ab3ec0');
  }

}