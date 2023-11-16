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
  @Input() actorId!: number;
  @Input() pageNumber  !: number;
  knownForList: KnownForMovie[] = [];
  popularList!: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getPagedActorList(this.pageNumber).subscribe(resp => {
      this.popularList = resp.results;

      if (this.findPopularActorIndex() != -1) {
        this.knownForList =
          this.popularList[this.findPopularActorIndex()].known_for;
      }
    })
  }

  findPopularActorIndex() {
    const index = this.popularList.findIndex(
      (actor) => actor.id === this.actorId
    );
    return index;
  }
}
