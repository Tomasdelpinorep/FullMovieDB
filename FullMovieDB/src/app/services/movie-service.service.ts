import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PopularMoviesResponse } from '../models/top-rated-list';
import { TrendingMoviesResponse } from '../models/trending-movies';
import { ImageListResponse } from '../models/imageList';

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

  getTrendingMoviesList(): Observable<TrendingMoviesResponse> {
    return this.http.get<TrendingMoviesResponse>(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fba6287e1b5585e45727ead4703af755`
    );
  }

  getTrendingMoviesBackDrops(movieId:number):Observable<ImageListResponse>{
    return this.http.get<ImageListResponse>(`
    https://api.themoviedb.org/3/movie/${movieId}/images`);
  }
}