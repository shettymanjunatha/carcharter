import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.baseUrl}/GetCars`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${environment.baseUrl}/AddCar`, car);
  }
}
