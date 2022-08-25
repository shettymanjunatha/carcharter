import { HeaderComponent } from './../header/header.component';
import { AppState, reducers } from './../../../store/reducers/index';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarComponent } from './add-car.component';

describe('AddCarComponent', () => {
  let component: AddCarComponent;
  let fixture: ComponentFixture<AddCarComponent>;
  let storeMock : any;
  let fbMock : any;

  beforeEach(async () => {
    fbMock = new FormBuilder();
    await TestBed.configureTestingModule({
      declarations: [ AddCarComponent, HeaderComponent ],
      imports: [FormsModule, ReactiveFormsModule, StoreModule.forRoot(reducers)],
      providers:[
        { provide: Store<AppState>, usevalue: storeMock },
        { provide: FormBuilder, useValue: fbMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;

    component.submitted = false;
     component.carForm= fbMock.group({
      Brand: ['', Validators.required],
      Model: ['', Validators.required],
      Navigation: ['true']
    });
    fixture.detectChanges();
  });

  it('should call test', () => {

    component.test();

  })
});
