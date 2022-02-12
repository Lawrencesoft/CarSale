import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSaleHomeComponent } from './car-sale-home.component';

describe('CarSaleHomeComponent', () => {
  let component: CarSaleHomeComponent;
  let fixture: ComponentFixture<CarSaleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSaleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSaleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
