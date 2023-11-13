import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorListResponse } from '../models/actor-list.interface';
import { environment } from 'src/environments/environment';
import { ActorDetailsResponse } from '../models/actor-details.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http :HttpClient) { }

  getActorList() :Observable<ActorListResponse>{
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}`);
  }

  getPagedActorList(page:number){
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?page=${page}&api_key=${environment.apiKey}`);
  }

  getTop10ActorList() :Observable<ActorListResponse>{
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}&limit=10`);
  }

  getActorDetails(actorId:number) :Observable<ActorDetailsResponse>{
    return this.http.get<ActorDetailsResponse>(`https://api.themoviedb.org/3/person/${actorId}?api_key=${environment.apiKey}`);
  }
}
