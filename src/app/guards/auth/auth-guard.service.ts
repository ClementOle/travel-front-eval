import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TravelService} from "../../services/travel/travel.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,
              private travelService: TravelService) {
  }

  /**
   * Method for check if the user is auth, if not redirect to auth page
   * @param route The route param
   * @param state The state param
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.travelService.token) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
