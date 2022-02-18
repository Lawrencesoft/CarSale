import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/shared/auth.service';

import { CarSaleListComponent } from './car-sale-list.component';

describe('CarSaleListComponent', () => {
  let component: CarSaleListComponent;
  let fixture: ComponentFixture<CarSaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSaleListComponent ],
      imports: [ BrowserAnimationsModule, HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [ HttpClient, AuthService, DatePipe ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[CarSaleListComponent-create ] - should create the component', () => {
    expect(component).toBeTruthy();
  });
});
