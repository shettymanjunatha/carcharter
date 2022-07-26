
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { loginActionTypes, loadLoginFailure, loadLoginSuccess } from './login.actions';
import { LoginResponse } from '../model/login-response.model';
import { Observable, of, switchMap, catchError } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Injectable()
export class LoginEffects {

  constructor(private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private actions$: Actions, private router: Router) { }

  loadLogIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActionTypes.loadLogin),
      map((action: any) => action),
      switchMap(payload => {
        console.log("Effects", payload)
        return this.authService.logIn(payload.UserName, payload.Password).pipe(
          map((login: LoginResponse) => {
            console.log("response", login);
            return loadLoginSuccess({ "user": login });
          }), catchError((error: any) => {
            console.log(error);
            return of(loadLoginFailure({ "message": error }));
          }))
      })));

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActionTypes.loadLoginSuccess),
      map((action) => this.tokenStorageService.saveToken(action.user["Content"])),
      tap(() => this.router.navigateByUrl('/cars/list'))
    ),
    { dispatch: false }
  );

}