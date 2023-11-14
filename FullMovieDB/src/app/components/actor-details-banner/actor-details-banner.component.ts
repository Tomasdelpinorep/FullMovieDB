import { Component, Input } from '@angular/core';
import { ActorDetailsResponse } from 'src/app/models/actor-details.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-details-banner',
  templateUrl: './actor-details-banner.component.html',
  styleUrls: ['./actor-details-banner.component.css']
})
export class ActorDetailsBannerComponent {
@Input() actorDetails! :ActorDetailsResponse;

getActorImageUrl(){
  if(this.actorDetails.profile_path != null)
    return environment.smallerPng.concat(this.actorDetails.profile_path);

    return '';
}
}
