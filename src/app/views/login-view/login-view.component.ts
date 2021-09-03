import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {TravelService} from "../../services/travel/travel.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  errorMsg: string;

  constructor(private travelService: TravelService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Method called when user submit login form
   */
  onSignIn(user: User): void {
    this.travelService.login(user)
      .then(() => {
        this.router.navigate(['sales']);
      }, (err) => {
        this.errorMsg = err;
      });
  }

}
