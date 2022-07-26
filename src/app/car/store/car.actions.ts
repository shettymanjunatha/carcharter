import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Car } from '../model/car.model';

export enum CarActionTypes {
    LOAD_CARS = '[Cars List] Load Cars via Service',
    LOAD_CARS_SUCCESS = '[Cars Effect] Cars Loaded SUCCESS',
    ADD_CAR_SUCCESS = '[Cars Effect] Cars Added SUCCESS',
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
