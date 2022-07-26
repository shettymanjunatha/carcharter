import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { LoginResponse } from '../model/login-response.model';

export enum AuthActionTypes {
    AUTH_LOGIN = '[Auth] Login',
    AUTH_LOGIN_SUCCESS = '[Auth] Login Loaded SUCCESS',
    AUTH_LOGIN_FAILURE = '[Auth] Login FAILURE',
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
