import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit{
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void { //Falta comprobar si el request token ha sido aceptado o denegado
    this.authService.createSession(sessionStorage.getItem('REQUEST_TOKEN')!).subscribe(resp => {
      
    });
  }

}
