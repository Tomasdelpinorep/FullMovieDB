import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.css']
})
export class SearchActorsComponent {
  constructor(private actorService :ActorService){}
  searchedMovieList :Actor[] = [];
  @Output() sendSearchedMovieList = new EventEmitter<Actor[]>();

  onEnter(searchQuery :string){
    this.actorService.getActorListWithQuery(searchQuery).subscribe(resp => {
      this.searchedMovieList = resp.results;
      this.sendSearchedMovieList.emit(this.searchedMovieList);
    })
  }
}
