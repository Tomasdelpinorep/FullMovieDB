import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDetailsResponse } from '../models/company-details.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanyDetails(companyId: number): Observable<CompanyDetailsResponse>{
    return this.http.get<CompanyDetailsResponse>
    (`https://api.themoviedb.org/3/company/${companyId}?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }
}
