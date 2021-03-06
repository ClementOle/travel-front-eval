import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Method called when user submit login form
   */
  onSignIn(user: User): void {
    this.authService.login(user)
      .then(() => {
        this.router.navigate(['sales']);
      }, (err) => {
        this.errorMsg = err;
      });
  }

}
