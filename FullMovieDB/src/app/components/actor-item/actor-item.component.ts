import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/actor-list-credits.interface';
import { Actor } from 'src/app/models/actor-list.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent {
  @Input() actor !: Actor | Cast;

  getActorImageUrl(){
    return `${environment.smallerPng}${this.actor.profile_path}`;
  }
}
