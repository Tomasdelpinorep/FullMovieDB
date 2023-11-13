import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieListResponse } from '../models/serie-list.interface';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) { }

  getTopRatedSeries(): Observable<SerieListResponse>{
    return this.httpClient.get<SerieListResponse>
    ('https://api.themoviedb.org/3/tv/top_rated?api_key=fba6287e1b5585e45727ead4703af755');
  }

}
