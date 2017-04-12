 import { Component, OnInit } from '@angular/core';
 import {AuthService} from '../../services/auth/auth.service';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authServe: AuthService,
  			      private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
		this.authServe.logout();
		this.router.navigate(['/login']);  		
    return false;
  	}

    isLoggedIn(){
            return this.authServe.loggedIn();
    }
}
