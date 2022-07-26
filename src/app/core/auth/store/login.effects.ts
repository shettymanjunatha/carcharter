
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { loginActionTypes, loadLoginFailure, loadLoginSuccess } from './login.actions';
import { LoginResponse } from '../model/login-response.model';
import { of, switchMap, catchError } from 'rxjs';
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
        return this.authService.logIn(payload.UserName, payload.Password).pipe(
          map((login: LoginResponse) => {
            login.id= 1;
            return loadLoginSuccess({ "user": login });
          }), catchError(() => {
            return of(loadLoginFailure({ "message": 'Incorrect email and/or password.' }));
          }))
      })
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActionTypes.loadLoginSuccess),
      map((action) => this.tokenStorageService.saveToken(action.user["Content"])),
      tap(() => this.router.navigateByUrl('/cars'))
    ),
    { dispatch: false }
  );

}