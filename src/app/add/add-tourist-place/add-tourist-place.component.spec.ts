import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTouristPlaceComponent } from './add-tourist-place.component';

describe('AddTouristPlaceComponent', () => {
  let component: AddTouristPlaceComponent;
  let fixture: ComponentFixture<AddTouristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTouristPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
