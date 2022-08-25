import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { CarResolver } from './car.resolver';

describe('CarResolver', () => {
  let resolver: CarResolver;

  let storeMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: Store, usevalue: storeMock}]
    });
    resolver = TestBed.inject(CarResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
