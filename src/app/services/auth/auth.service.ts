import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user.model";
import {TravelService} from "../travel/travel.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Method for try to login the user
   * @param user
   */
  login(user: User): Promise<any> {
    return new Promise<any>(
      (res, rej) => {

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        this.http
          .post(TravelService.API_URL + 'login', user.toJSON(), {headers})
          .subscribe(
            (info: any) => {
              console.info(info);

              this.token.next(info.token);
              //@ts-ignore
              res();
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
   * Method for logout the user
   */
  logout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    )
  }

}
