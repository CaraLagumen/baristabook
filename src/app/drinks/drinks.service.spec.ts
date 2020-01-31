import { TestBed } from '@angular/core/testing';

import { DrinksService } from './drinks.service';

describe('DrinksService', () => {
   beforeEach(() => TestBed.configureTestingModule({}));

   it('should be created', () => {
      const service: DrinksService = TestBed.get(DrinksService);
      expect(service).toBeTruthy();
   });
});
