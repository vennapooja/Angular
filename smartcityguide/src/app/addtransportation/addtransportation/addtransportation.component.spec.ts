import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransportationComponent } from './addtransportation.component';

describe('AddtransportationComponent', () => {
  let component: AddtransportationComponent;
  let fixture: ComponentFixture<AddtransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
