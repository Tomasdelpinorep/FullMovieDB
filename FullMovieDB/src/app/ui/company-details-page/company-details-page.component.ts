import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsResponse } from 'src/app/models/company-details.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details-page',
  templateUrl: './company-details-page.component.html',
  styleUrls: ['./company-details-page.component.css']
})
export class CompanyDetailsPageComponent implements OnInit{

  @Output() companyDetails!: CompanyDetailsResponse;
  route: ActivatedRoute = inject(ActivatedRoute);
  companyId!: number;

  constructor(private companyService: CompanyService){}

  ngOnInit(): void {
    this.companyService.getCompanyDetails(this.companyId).subscribe(resp => {
      this.companyDetails = resp;
    })
  }


}
