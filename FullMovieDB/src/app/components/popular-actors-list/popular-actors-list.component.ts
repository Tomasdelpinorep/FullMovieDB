import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-popular-actors-list',
  templateUrl: './popular-actors-list.component.html',
  styleUrls: ['./popular-actors-list.component.css']
})
export class PopularActorsListComponent implements OnInit{
  constructor(private actorService :ActorService){}
actorList : Actor[] = [];

  ngOnInit(): void {
    this.actorService.getActorList().subscribe(resp => {
      this.actorList = resp.results;
    })
  }
}