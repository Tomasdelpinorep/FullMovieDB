import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css']
})
export class CarousellComponent {
	showNavigationArrows = true;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}