import { createAction, props } from '@ngrx/store';
import { Car } from '../model/car.model';

export enum CarActionTypes {
    LOAD_CARS = '[Cars List Page] Load Cars via Service',
    LOAD_CARS_SUCCESS = '[Cars API] Cars Loaded Success',
    ADD_CAR_SUCCESS = '[Car Add Page] Cars Added Success',
}

export const loadCars = createAction(
    CarActionTypes.LOAD_CARS,
);

export const loadCarSuccess = createAction(
    CarActionTypes.LOAD_CARS_SUCCESS,
    props<{ car: Car[] }>()
);

export const addCarSuccess = createAction(
    CarActionTypes.ADD_CAR_SUCCESS,
    props<{ car: Car }>()
);

export const carActionTypes = {
    loadCars,
    loadCarSuccess,
    addCarSuccess
};
