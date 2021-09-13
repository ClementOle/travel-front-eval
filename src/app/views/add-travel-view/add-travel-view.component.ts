import { Component, OnInit } from '@angular/core';
import {TravelService} from "../../services/travel/travel.service";
import {Travel} from "../../models/travel.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-travel-view',
  templateUrl: './add-travel-view.component.html',
  styleUrls: ['./add-travel-view.component.css']
})
export class AddTravelViewComponent implements OnInit {

  constructor(private travelService: TravelService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addTravel($event: Travel) {
    this.travelService.addTravel($event)
      .then(value => this.router.navigateByUrl("/"))
  }
}
