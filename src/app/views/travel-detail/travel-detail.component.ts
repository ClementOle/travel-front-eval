import {Component, OnInit} from '@angular/core';
import {Travel} from "../../models/travel.model";
import {TravelService} from "../../services/travel/travel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {


  travel: Travel;

  constructor(private route: ActivatedRoute, private travelService: TravelService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.travelService.getTravel(id)
      .then(
        (travel: Travel) => {
          this.travel = travel;
        }
      );
  }

}
