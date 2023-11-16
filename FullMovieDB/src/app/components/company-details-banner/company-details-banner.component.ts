import { Component, Input } from '@angular/core';
import { CompanyDetailsResponse } from 'src/app/models/company-details.interface';

@Component({
  selector: 'app-company-details-banner',
  templateUrl: './company-details-banner.component.html',
  styleUrls: ['./company-details-banner.component.css']
})
export class CompanyDetailsBannerComponent {

  @Input() companyDetails!: CompanyDetailsResponse;

  getCompanyImage(){
    if (this.companyDetails.logo_path == null)
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";

    return `https://image.tmdb.org/t/p/w500/${this.companyDetails.logo_path}`;
  }
}
