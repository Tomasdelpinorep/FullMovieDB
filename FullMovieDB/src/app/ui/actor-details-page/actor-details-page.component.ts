import { Component, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailsResponse } from 'src/app/models/actor-details.interface';
import { Actor } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-details-page',
  templateUrl: './actor-details-page.component.html',
  styleUrls: ['./actor-details-page.component.css']
})
export class ActorDetailsPageComponent implements OnInit {
  actorDetails!: ActorDetailsResponse;
  popularList!: Actor[];
  route: ActivatedRoute = inject(ActivatedRoute);
  actorId !: number;
  pageNumber !: number;

  constructor(private actorService: ActorService) {
    this.actorId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    //Gets page number from which the clicked actor was in. Used to get the correct page of the popular list where the actor's known_for list can be found
    this.pageNumber = Number(this.route.snapshot.queryParamMap.get('page'));
    console.log(this.pageNumber);

    this.actorService.getActorDetails(this.actorId).subscribe(resp => {
      this.actorDetails = resp;
    })
  }
}
