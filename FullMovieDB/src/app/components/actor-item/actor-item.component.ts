import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor-list.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent {
@Input() actor !:Actor;
@Input() page !:number;
constructor(private router:Router){}

getActorImageUrl(){
  return environment.smallerPng.concat(this.actor.profile_path);
}

sendActorPage(actorId: number, page: number) {
  this.router.navigate(['/actors', actorId], { queryParams: { page: page } });
}
}
