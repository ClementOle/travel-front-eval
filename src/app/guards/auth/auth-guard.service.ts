import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  /**
   * Method for check if the user is auth, if not redirect to auth page
   * @param route The route param
   * @param state The state param
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.token.getValue()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
