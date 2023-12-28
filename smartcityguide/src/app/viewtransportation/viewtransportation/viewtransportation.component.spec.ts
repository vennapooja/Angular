import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportationComponent } from './viewtransportation.component';

describe('ViewtransportationComponent', () => {
  let component: ViewtransportationComponent;
  let fixture: ComponentFixture<ViewtransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewtransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewtransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
