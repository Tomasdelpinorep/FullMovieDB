import { Component, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailsResponse } from 'src/app/models/actor-details.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-details-page',
  templateUrl: './actor-details-page.component.html',
  styleUrls: ['./actor-details-page.component.css']
})
export class ActorDetailsPageComponent implements OnInit{
@Output() actorDetails! :ActorDetailsResponse;
route: ActivatedRoute = inject(ActivatedRoute);
actorId ! :number;

constructor(private actorService: ActorService){
  this.actorId = Number(this.route.snapshot.params['id']);
}
  ngOnInit(): void {
    this.actorService.getActorDetails(this.actorId).subscribe(resp => {
      this.actorDetails = resp;
    })
  }
}
