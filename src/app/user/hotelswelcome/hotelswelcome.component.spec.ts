import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelswelcomeComponent } from './hotelswelcome.component';

describe('HotelswelcomeComponent', () => {
  let component: HotelswelcomeComponent;
  let fixture: ComponentFixture<HotelswelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelswelcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelswelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
