import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarResolver } from './car/car.resolver';
import { AddCarComponent } from './car/component/add-car/add-car.component';
import { CarsListComponent } from './car/component/cars-list/cars-list.component';
import { LoginComponent } from './core/auth/component/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'cars',
    loadChildren: () => import('./car/car.module').then(m => m.CarModule)
  },
  { path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
