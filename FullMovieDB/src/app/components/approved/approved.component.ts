import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
  constructor(private authService: AuthenticationService,
    private accountService: AccountService) { }

  ngOnInit(): void { //Falta comprobar si el request token ha sido aceptado o denegado
    this.authService.createSession().subscribe(resp => {
      sessionStorage.setItem('SESSION_ID', resp.session_id);
      window.location.href = `http://localhost:4200/account`;
    });
  }

}
