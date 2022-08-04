import { CarState, selectTotal } from './car.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll } from './car.reducers';

export const carFeatureSelector = createFeatureSelector<CarState>('cars');

export const getAllCars = createSelector(
    carFeatureSelector,
    selectAll
);

export const areCarsLoaded = createSelector(
    carFeatureSelector,
    state => state.carsLoaded
);


export const totalCars = createSelector(
    carFeatureSelector,
    selectTotal
);

export const getCarById = (id: number) => 
    (state: CarState) => state.entities[id];

    
export const getCarEntityById = (id: number) => 
    createSelector(carFeatureSelector, getCarById(id));