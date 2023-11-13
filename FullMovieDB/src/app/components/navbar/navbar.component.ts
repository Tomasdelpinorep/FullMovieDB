import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
https: any;
  constructor(private authService: AuthenticationService) { }
  requestToken !: string;

  logIn() {
    this.authService.getRequestToken().subscribe(resp => {
      sessionStorage.setItem('REQUEST_TOKEN',resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${sessionStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;

    })
  }
}
