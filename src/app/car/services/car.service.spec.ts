import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Car } from '../model/car.model';
import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { environment } from './../../../environments/environment';
describe('CarService', () => {
  let service: CarService;

  let httpClientMock : any;

  let environmentMock : any;

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
      post: jest.fn()
    };
    environmentMock = {
      baseUrl: "http://localhost:3000"
    }
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CarService, {provide: HttpClient, useValue: httpClientMock }]
    });
    service = TestBed.inject(CarService);
  });

  //httpTestingController = TestBed.get(HttpTestingController);

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });


  it('should getAllCars return response', (done) => {
    const res = [
      {
        "id": 1,
        "Brand": "Mazda",
        "Model": "RX-8",
        "Navigation": "true"
      },
      {
        "id": 2,
        "Brand": "Honda",
        "Model": "Civic",
        "Navigation": "true"
      }
    ];

    jest.spyOn(httpClientMock,'get').mockReturnValue(of(res));

    service.getAllCars().subscribe({
      next: data => {
        expect(data).toEqual(res);
        expect(data.length).toEqual(res.length);
        done()
      }
    })


  });

  it('should call addCar', (done)=> {
    const res = {
      "id": 3,
      "Brand": "Tesla",
      "Model": "A1234",
      "Navigation": true
    }
    jest.spyOn(httpClientMock,'post').mockReturnValueOnce(of(res));

    service.addCar(res).subscribe({
      next: data => {
        expect(data).toEqual(res);
        done();
      }
    })
  })


  // it('should be addCar', () => {
  //   expect(service).toBeTruthy();
  // });




});



