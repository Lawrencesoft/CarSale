import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from 'src/app/common-material/common-material.module';

import { CarSaleHomeComponent } from './car-sale-home.component';

describe('CarSaleHomeComponent', () => {
  let component: CarSaleHomeComponent;
  let fixture: ComponentFixture<CarSaleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSaleHomeComponent ],
      imports: [ BrowserAnimationsModule, FlexLayoutModule, CommonMaterialModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSaleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[CarSaleHomeComponent-create ] - should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('[CarSaleHomeComponent-title ] - should check the page title', () => {
    let titleDiv = fixture.debugElement.query(By.css('#page-title')).nativeElement.innerText;
    expect(titleDiv).toBe('Second Hand Cars');
  });
});
