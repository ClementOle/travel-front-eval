import {Component, OnInit} from '@angular/core';
import {Travel} from "../../models/travel.model";
import {TravelService} from "../../services/travel/travel.service";

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  travels: Array<Travel>;

  nbCols: number = 2;
  cols: Array<any>;
  nbRows: number;
  rows: Array<any>;

  constructor(private travelService: TravelService) {
    this.cols = new Array<any>(this.nbCols).fill(null);
  }

  ngOnInit(): void {
    this.travelService.getTravels()
      .then((travels: Array<Travel>) => {
        this.travels = travels;

        this.nbRows = Math.ceil(this.travels.length / this.nbCols);
        this.rows = new Array<any>(this.nbRows).fill(null);
      });
  }


  getTravelIndex(iR: number, iC: number): number {
    return iR * this.nbCols + iC;
  }

  /*
    onClickDeleteTravel(id: number) {

      this.travelService
        .deleteTravel(id)
        .then(() => {
          for (let i = 0; i < this.travels.length - 1; i++) {
            if (this.travels[i].id === id) {
              this.travels.splice(i, 1);
              break;
            }
          }
        });

    }*/

}
