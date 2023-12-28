import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTouristPlaceComponent } from './view-tourist-place.component';

describe('ViewTouristPlaceComponent', () => {
  let component: ViewTouristPlaceComponent;
  let fixture: ComponentFixture<ViewTouristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTouristPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
