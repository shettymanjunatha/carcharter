import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let storeMock: any;
  let loadLoginMock : any;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn
    }
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {provide: Store, useValue: storeMock},
              ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    component.ngOnInit();

  })
  
});
