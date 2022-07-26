import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarResolver } from './car.resolver';
import { AddCarComponent } from './component/add-car/add-car.component';
import { CarsListComponent } from './component/cars-list/cars-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'prefix',
    children: [
      // { path: '', redirectTo: '/list', pathMatch: 'full' },
      {
        path: 'list',
        component: CarsListComponent,
        resolve: {
          courses: CarResolver
        },
        pathMatch: 'full'
      },
      {
        path: 'add-car',
        component: AddCarComponent,
        pathMatch: 'full'
      }]
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
