import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car.service';
import { CarsListComponent } from './component/cars-list/cars-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './store/car.reducers';
import { CarEffects } from './store/car.effects';
import { AddCarComponent } from './component/add-car/add-car.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    CarsListComponent,
    AddCarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('cars', carsReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  providers:[CarService]
})
export class CarModule { }
