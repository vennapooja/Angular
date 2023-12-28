import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometransportationComponent } from './welcometransportation.component';

describe('WelcometransportationComponent', () => {
  let component: WelcometransportationComponent;
  let fixture: ComponentFixture<WelcometransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcometransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcometransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
