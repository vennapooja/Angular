import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTouristComponent } from './view-tourist.component';

describe('ViewTouristComponent', () => {
  let component: ViewTouristComponent;
  let fixture: ComponentFixture<ViewTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTouristComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
