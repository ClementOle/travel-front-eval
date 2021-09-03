import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Travel} from "../../models/travel.model";
import {map} from "rxjs/operators";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  static API_URL = "https://angular-eval.herokuapp.com/api/v1/";

  static token: string;

  constructor(private http: HttpClient) {
  }

  /**
   * Method for retrieve all the travels from the API
   */
  getTravels(): Promise<Array<Travel>> {
    let headers = TravelService.getDefaultHeader();
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
        let headers = TravelService.getDefaultHeader();

        this.http
          .get(TravelService.API_URL + 'offer/' + id, {headers})
          .subscribe(
            (travel: any) => {
              res(Travel.fromJSON(travel));
            },
            err => {
              console.error(err);
              rej(err);
            }
          )
      }
    );
  }

  /**
   * Method for try to login the user
   * @param user
   */
  login(user: User): Promise<any> {

    return new Promise(
      (res, rej) => {

        let headers = TravelService.getDefaultHeader();

        this.http
          .post(TravelService.API_URL + 'login', user.toJSON(), {headers})
          .subscribe(
            (info: any) => {
              console.info(info);

              TravelService.token = info.token;

              res(info);
            },
            err => {
              console.error(err);
              rej(err.error?.errorMsg);
            }
          );

      }
    );

  }

  /**
   * Method for try to register the user
   * @param user
   */
  register(user: any): Promise<any> {

    return new Promise(
      (res, rej) => {

        let headers = TravelService.getDefaultHeader();

        this.http
          .post(TravelService.API_URL + 'register', user, {headers})
          .subscribe(
            (info: any) => {
              console.info(info);

              // Set the  token
              TravelService.token = info.token;

              res(info);
            },
            err => {
              console.error(err);
              rej(err.error.errorMsg);
            }
          );

      }
    );
  }

  /**
   * Return the default header
   */
  private static getDefaultHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (this.token) {
      headers = headers.append('Authorization', this.token);
    }
    return headers;
  }
}
