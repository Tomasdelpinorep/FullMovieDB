import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AccountDetailsResponse } from 'src/app/models/account-details.interface';
import { ActorDetailsResponse } from 'src/app/models/actor-details.interface';
import { Actor } from 'src/app/models/actor-list.interface';
import { ActorService } from 'src/app/services/actors.service';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-actors-carousel',
  templateUrl: './actors-carousel.component.html',
  styleUrls: ['./actors-carousel.component.css'],
})
export class ActorsCarouselComponent implements OnInit{
  currentSlide = 0;
  currentPage = 1;
  popular: String[] = [];
  top10ActorsList: Actor[] = [];
  top10Details: ActorDetailsResponse[] = [];
  top10Images:string[] = [];
  showNavigationArrows = true;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig, private actorService: ActorService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 0;
  }

  ngOnInit(): void {
    this.actorService.getTop10ActorList().subscribe((resp) => {
      this.top10ActorsList = resp.results;

      for(const actor of this.top10ActorsList){
        this.actorService.getActorDetails(actor.id).subscribe(resp =>{
          this.top10Details.push(resp);
          this.top10Images.push(this.getActorImageUrl(actor));
        })
      }
    });
  }

  onSlideChange(event: any) {
    this.currentSlide = this.getCurrentSlideNumber(event.current);
    return this.currentSlide;
  }

  getCurrentSlideNumber(slideString: String) {
    return Number(slideString.split('-').reverse()[0]);
  }

  getActorImageUrl(actor :Actor){
    return environment.smallerPng.concat(actor.profile_path);
  }
}
