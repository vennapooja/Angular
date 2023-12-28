import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtransportationComponent } from './searchtransportation.component';

describe('SearchtransportationComponent', () => {
  let component: SearchtransportationComponent;
  let fixture: ComponentFixture<SearchtransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchtransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchtransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
