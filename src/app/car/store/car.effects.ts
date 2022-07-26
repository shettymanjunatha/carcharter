
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { carActionTypes } from './car.actions';
import { Car } from '../model/car.model';

@Injectable()
export class CarEffects {

  constructor(private carService: CarService, private actions$: Actions, private router: Router) {}

  loadCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(carActionTypes.loadCars),
      concatMap(() => this.carService.getAllCars()),
      map((car : Car[]) => 
        carActionTypes.loadCarSuccess({car})
     )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(carActionTypes.addCarSuccess),
      concatMap((action) => this.carService.addCar(action.car)),
      tap(() => this.router.navigateByUrl('/cars'))
    ),
    {dispatch: false}
  );


  
}