import { Component } from '@angular/core';
import { Actor } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent {

  actorList: Actor[] = [];

  constructor(private actorService: ActorService){}

  ngOnInit(): void {
    this.actorService.getActorList().subscribe(resp =>{
      this.actorList = resp.results;
    })
  }
}
