import { Component, Input, OnInit } from '@angular/core';
import { ActorDetailsResponse } from 'src/app/models/actor-details.interface';
import { Actor, KnownForMovie } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-known-for-list',
  templateUrl: './known-for-list.component.html',
  styleUrls: ['./known-for-list.component.css'],
})
export class KnownForListComponent implements OnInit {
  constructor(private actorService: ActorService) {}
  @Input() actorDetails!: ActorDetailsResponse;

  popularList: Actor[] = [];
  popularListIds: number[] = [];
  knownForList: KnownForMovie[] = [];

  ngOnInit(): void {
    this.actorService.getActorList().subscribe((resp) => {
      this.popularList = resp.results;

      if (this.findPopularActorIndex() != -1) {
        this.knownForList =
          this.popularList[this.findPopularActorIndex()].known_for;
      }
    });
  }

  findPopularActorIndex() {
    const index = this.popularList.findIndex(
      (actor) => actor.id === this.actorDetails.id
    );
    return index;
  }
}
