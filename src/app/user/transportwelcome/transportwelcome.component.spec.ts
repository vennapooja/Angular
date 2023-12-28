import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportwelcomeComponent } from './transportwelcome.component';

describe('TransportwelcomeComponent', () => {
  let component: TransportwelcomeComponent;
  let fixture: ComponentFixture<TransportwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportwelcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
