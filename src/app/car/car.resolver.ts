import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../store/reducers';
import { loadCars } from './store/car.actions';

import { areCarsLoaded } from './store/cars.selectors';
import {filter, first, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(areCarsLoaded),
        tap((loadCarSuccess: boolean) => {
          if (!loadCarSuccess) {
            this.store.dispatch(loadCars());
          }
        }),
        filter((loadCarSuccess: boolean) => loadCarSuccess),
        first()
      );
  }
}

