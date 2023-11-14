import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/models/actor-list.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent {
@Input() actor !:Actor;

getActorImageUrl(){
  return environment.smallerPng.concat(this.actor.profile_path);
}
}
