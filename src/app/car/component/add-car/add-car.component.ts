import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as uuid from 'uuid';
import { Car } from '../../model/car.model';
import { addCarSuccess } from '../../store/car.actions';
import { getAllCars } from '../../store/cars.selectors';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  cars$: any;

  count: number = 0;

  carForm: FormGroup = this.fb.group({
    Brand: ['', Validators.required],
    Model: ['', Validators.required],
    Navigation: ['true']
  });;

  submitted = false;

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.store.select(getAllCars).subscribe((carList) => {
      this.count = carList.length;
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.carForm?.controls; }

  onSubmit(submittedForm: any) {
    this.submitted = true;
    if (submittedForm.invalid) {
      return;
    }

    const car: Car = { id: this.count + 1, Brand: submittedForm.value.Brand, Model: submittedForm.value.Model, Navigation: submittedForm.value.Navigation };
    this.store.dispatch(addCarSuccess({ car }));

  }

}
