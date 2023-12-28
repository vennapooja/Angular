import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeHotelsComponent } from './welcome-hotels.component';

describe('WelcomeHotelsComponent', () => {
  let component: WelcomeHotelsComponent;
  let fixture: ComponentFixture<WelcomeHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeHotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
