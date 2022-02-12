import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CarSaleRoutingModule } from './car-sale-routing.module';
import { CarSaleHomeComponent } from './car-sale-home/car-sale-home.component';
import { CarSaleListComponent } from './car-sale-home/car-sale-list/car-sale-list.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CarSaleHomeComponent,
    CarSaleListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonMaterialModule,
    MatIconModule,
    CarSaleRoutingModule
  ],
  providers:[
    DatePipe
  ]
})
export class CarSaleModule { }
