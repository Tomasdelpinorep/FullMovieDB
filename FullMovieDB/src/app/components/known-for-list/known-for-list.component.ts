import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor-list.interface';
import { CreditedMovie } from 'src/app/models/movie-credits.interface';
import { MovieService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-known-for-list',
  templateUrl: './known-for-list.component.html',
  styleUrls: ['./known-for-list.component.css'],
})
export class KnownForListComponent implements OnInit {
  @Input() actorId!: number;
  knownForList: CreditedMovie[] = [];
  popularList!: Actor[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieCreditList(this.actorId).subscribe((resp) => {
      this.knownForList = resp.cast;
    });
  }
}
