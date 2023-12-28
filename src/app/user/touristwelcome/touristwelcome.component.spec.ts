import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristwelcomeComponent } from './touristwelcome.component';

describe('TouristwelcomeComponent', () => {
  let component: TouristwelcomeComponent;
  let fixture: ComponentFixture<TouristwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouristwelcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouristwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
