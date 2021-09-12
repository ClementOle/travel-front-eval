import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Travel} from "../../models/travel.model";
import {map} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  public static API_URL = "https://angular-eval.herokuapp.com/api/v1/";


  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  /**
   * Method for retrieve all the travels from the API
   */
  getTravels(): Promise<Array<Travel>> {
    let headers = this.getDefaultHeader();
    return this.http
      .get(TravelService.API_URL + 'offers', {headers})
      .pipe(
        map((res: any) => {
          return res.offers.map((item: any) => Travel.fromJSON(item))
        })
      )
      .toPromise();
  }

  getTravel(id: string): Promise<any> {
    return new Promise(
      (res, rej) => {
        let headers = this.getDefaultHeader();

        this.http
          .get(TravelService.API_URL + 'offers/' + id, {headers})
          .subscribe(
            (travel: any) => {
              res(Travel.fromJSON(travel.offer));
            },
            err => {
              console.error(err);
              rej(err);
            }
          )
      }
    );
  }

  addTravel(travel: Travel): Promise<any> {
    let headers = this.getDefaultHeader();

    return this.http
      .post(TravelService.API_URL + 'offers/new', travel.toJSON(), {headers})
      .pipe(
        map((res: any) => {
          return Travel.fromJSON(res.offer);
        })
      )
      .toPromise();
  }

  /**
   * Return the default header
   */
  private getDefaultHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (this.authService.token.getValue()) {
      headers = headers.append('Authorization', this.authService.token.getValue());
    }
    return headers;
  }
}
