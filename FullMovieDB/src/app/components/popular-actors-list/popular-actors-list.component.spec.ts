import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularActorsListComponent } from './popular-actors-list.component';

describe('PopularActorsListComponent', () => {
  let component: PopularActorsListComponent;
  let fixture: ComponentFixture<PopularActorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularActorsListComponent]
    });
    fixture = TestBed.createComponent(PopularActorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
