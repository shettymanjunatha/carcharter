import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
    AUTH_LOGIN = '[Login Page] Login',
    AUTH_LOGIN_SUCCESS = '[Auth API] Login Loaded Success',
    AUTH_LOGIN_FAILURE = '[Auth API] Login Failure',
}

export const loadLogin = createAction(
    AuthActionTypes.AUTH_LOGIN,
    props<{  UserName: string, Password: string }>()
);

export const loadLoginSuccess = createAction(
    AuthActionTypes.AUTH_LOGIN_SUCCESS,
    props<{ user: any }>()
);

export const loadLoginFailure = createAction(
    AuthActionTypes.AUTH_LOGIN_FAILURE,
    props<{ message: string }>()
);

export const loginActionTypes = {
    loadLogin,
    loadLoginSuccess,
    loadLoginFailure
};
