/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MobileServiceService } from './mobile-service.service';

describe('Service: MobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileServiceService]
    });
  });

  it('should ...', inject([MobileServiceService], (service: MobileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
