import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { LoginResponse } from '../model/login-response.model';
import {  loginActionTypes } from './login.actions';


export interface LoginState extends EntityState<any> {
    isAuthenticated: boolean;
    user: LoginResponse;
    message: string;
}

export const adapter: EntityAdapter<string> = createEntityAdapter<any>();

export const initialState = adapter.getInitialState({
    isAuthenticated: false,
    // token: "",
    // message: ""
});

export const loginReducer = createReducer(
    initialState,

    on(loginActionTypes.loadLoginSuccess, (state, action) => {
        return adapter.addOne(action.user, { ...state, isAuthenticated: true });
    }),

    on(loginActionTypes.loadLoginFailure, (state, action) => {
        return adapter.addOne(action.message, { ...state, isAuthenticated: false, errorMessage: 'Incorrect email and/or password.' });
    })
);

export const { selectAll, selectIds } = adapter.getSelectors();