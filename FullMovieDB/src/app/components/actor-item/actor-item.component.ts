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
    if(this.actor.profile_path == null){
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    }
    return `${environment.smallerPng}${this.actor.profile_path}`;
  }
}
