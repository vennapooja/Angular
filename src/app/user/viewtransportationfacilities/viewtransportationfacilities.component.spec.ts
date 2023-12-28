import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportationfacilitiesComponent } from './viewtransportationfacilities.component';

describe('ViewtransportationfacilitiesComponent', () => {
  let component: ViewtransportationfacilitiesComponent;
  let fixture: ComponentFixture<ViewtransportationfacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewtransportationfacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewtransportationfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
