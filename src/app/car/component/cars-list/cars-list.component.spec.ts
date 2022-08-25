import { CarService } from './../../services/car.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListComponent } from './cars-list.component';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  let carServiceMock: any;
  let storeMock: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsListComponent ],
      imports:[HttpClientModule],
      providers: [
        { provide: CarService, usevalue: carServiceMock },
        { provide: Store, usevalue: storeMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
