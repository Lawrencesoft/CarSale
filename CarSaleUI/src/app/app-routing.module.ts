import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationGuard } from './user-authentication/user-authentication.guard';

const routes: Routes = [ {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
},
{
  path: 'car-sale',
  loadChildren: () => import('./car-sale/car-sale.module').then(mod => mod.CarSaleModule),
  canActivate: [ UserAuthenticationGuard ]
},
{
  path: '**',
  redirectTo: '/login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
