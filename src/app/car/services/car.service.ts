import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/GetCars');
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>('http://localhost:3000/AddCar', car);
  }
}
