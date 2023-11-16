import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailsBannerComponent } from './actor-details-banner.component';

describe('ActorDetailsBannerComponent', () => {
  let component: ActorDetailsBannerComponent;
  let fixture: ComponentFixture<ActorDetailsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorDetailsBannerComponent]
    });
    fixture = TestBed.createComponent(ActorDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
