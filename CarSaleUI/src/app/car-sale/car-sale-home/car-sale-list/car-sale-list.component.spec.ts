import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSaleListComponent } from './car-sale-list.component';

describe('CarSaleListComponent', () => {
  let component: CarSaleListComponent;
  let fixture: ComponentFixture<CarSaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSaleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
