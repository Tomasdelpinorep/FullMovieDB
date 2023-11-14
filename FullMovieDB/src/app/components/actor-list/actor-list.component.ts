import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/actor-list-credits.interface';
import { Actor } from 'src/app/models/actor-list.interface';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent {

  @Input() movie!: MovieDetailsResponse;
  actorList: Cast[] = [];

  constructor(private actorService: ActorService){}

  ngOnInit(): void {
    this.actorService.getActorsByMovie(this.movie.id).subscribe(resp =>{
      this.actorList = resp.cast;
    })
  }
}
