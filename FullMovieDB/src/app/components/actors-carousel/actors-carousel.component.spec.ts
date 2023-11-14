import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsCarouselComponent } from './actors-carousel.component';

describe('ActorsCarouselComponent', () => {
  let component: ActorsCarouselComponent;
  let fixture: ComponentFixture<ActorsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsCarouselComponent]
    });
    fixture = TestBed.createComponent(ActorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
