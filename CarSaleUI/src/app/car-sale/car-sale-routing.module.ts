import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSaleHomeComponent } from './car-sale-home/car-sale-home.component';

const routes: Routes = [{
  path: '',
  component: CarSaleHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarSaleRoutingModule { }
