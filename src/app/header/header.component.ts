import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authStatus!: boolean;
  adminStatus!: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.adminStatus = this.authService.isAdmin;
  }

  onSignIn() {
    console.log("sign in");
    let isAdmin = false;
    this.authService.signIn(isAdmin);
    this.authStatus = this.authService.isAuth;
  }

  onSignOut() {
    console.log("sign out");
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
