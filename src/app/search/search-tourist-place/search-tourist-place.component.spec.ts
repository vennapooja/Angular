import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTouristPlaceComponent } from './search-tourist-place.component';

describe('SearchTouristPlaceComponent', () => {
  let component: SearchTouristPlaceComponent;
  let fixture: ComponentFixture<SearchTouristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTouristPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
