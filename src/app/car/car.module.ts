import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car.service';
import { CarsListComponent } from './component/cars-list/cars-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './store/car.reducers';
import { CarEffects } from './store/car.effects';
import { AddCarComponent } from './component/add-car/add-car.component';
import { CarRoutingModule } from './car-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';



@NgModule({
  declarations: [
    CarsListComponent,
    AddCarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarRoutingModule,
    StoreModule.forFeature('cars', carsReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  providers:[CarService]
})
export class CarModule { }
