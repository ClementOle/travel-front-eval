import {Component, OnInit} from '@angular/core';
import {Travel} from "../../models/travel.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TravelService} from "../../services/travel/travel.service";

@Component({
  selector: 'app-edit-travel-view',
  templateUrl: './edit-travel-view.component.html',
  styleUrls: ['./edit-travel-view.component.css']
})
export class EditTravelViewComponent implements OnInit {

  travel: Travel;

  constructor(private router: Router,
              private travelService: TravelService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.travelService.getTravel(id).then(travel => this.travel = travel);
  }

  editTravel($event: Travel) {
    this.travelService.editTravel($event).then(() => this.router.navigateByUrl("/"));
  }
}
