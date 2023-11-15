import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieListResponse } from '../models/movie-list.interface';
import { TrendingMoviesResponse } from '../models/trending-movies';
import { ImageListResponse } from '../models/imageList';
import { MovieDetailsResponse } from '../models/movie-details.interface';
import { ActorListCreditsResponse } from '../models/actor-list-credits.interface';

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


  getTrendingMoviesList(): Observable<TrendingMoviesResponse> {
    return this.http.get<TrendingMoviesResponse>(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fba6287e1b5585e45727ead4703af755`
    );
  }

  getTrendingMoviesBackDrops(movieId:number):Observable<ImageListResponse>{
    return this.http.get<ImageListResponse>(`
    https://api.themoviedb.org/3/movie/${movieId}/images`);
  }

  getFilmById(id: number): Observable <MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>
    (`https://api.themoviedb.org/3/movie/${id}?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }

  getCreditsByMovie(movieId: number): Observable <ActorListCreditsResponse>{
    return this.http.get<ActorListCreditsResponse>
    (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }
}