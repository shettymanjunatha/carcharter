import { Car } from '../model/car.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { carActionTypes } from './car.actions';

export interface CarState extends EntityState<Car> {
    carsLoaded: boolean;
}

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>();

export const initialState = adapter.getInitialState({
    carsLoaded: false
});

export const carsReducer = createReducer(
    initialState,

    on(carActionTypes.loadCarSuccess, (state, action) => {
        return adapter.addMany(
            action.car,
            { ...state, carsLoaded: true }
        );
    }),

    on(carActionTypes.addCarSuccess, (state, action) => {
        return adapter.addOne(action.car, state);
    })
);

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();