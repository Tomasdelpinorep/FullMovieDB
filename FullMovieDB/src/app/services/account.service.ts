import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  getAccountDetails() :Observable<AccountDetailsResponse>{
    return this.http.get<AccountDetailsResponse>(`https://api.themoviedb.org/3/account?api_key=${environment.apiKey}&session_id=${sessionStorage.getItem('SESSION_ID')}`);
  }
}
