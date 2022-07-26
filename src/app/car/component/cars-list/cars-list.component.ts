import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { Car } from '../../model/car.model';
import { CarService } from '../../services/car.service';
import { getAllCars } from '../../store/cars.selectors';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars$: Observable<Car[]> | undefined;

  constructor(private carService: CarService, private store: Store<AppState>) { }

  ngOnInit() {
    this.cars$ = this.store.select(getAllCars);
  }


}
