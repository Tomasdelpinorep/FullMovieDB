import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.css']
})
export class ActorsPageComponent implements OnInit{
  constructor(private actorService :ActorService){}
  page = 1;
  actorList :Actor [] = [];
  totalResults !:number;

  ngOnInit(): void {
    this.actorService.getPagedActorList(this.page).subscribe(resp => {
      this.actorList = resp.results;
      this.totalResults = resp.total_results;
    })
  }

  loadNewPage(): void{
    this.actorService.getPagedActorList(this.page).subscribe(resp => {this.actorList = resp.results});
  }
}