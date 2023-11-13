import { Component, OnInit } from '@angular/core';
import { AccountDetailsResponse } from 'src/app/models/account-details.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit{
constructor(private accountService :AccountService){}
account !:AccountDetailsResponse;

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      this.account = resp;
      console.log(this.account);
    })
  }
}
