import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTouristPlaceComponent } from './welcome-tourist-place.component';

describe('WelcomeTouristPlaceComponent', () => {
  let component: WelcomeTouristPlaceComponent;
  let fixture: ComponentFixture<WelcomeTouristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeTouristPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
