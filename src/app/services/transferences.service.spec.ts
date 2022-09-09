/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferencesService } from './transferences.service';

describe('Service: Transferences', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferencesService]
    });
  });

  it('should ...', inject([TransferencesService], (service: TransferencesService) => {
    expect(service).toBeTruthy();
  }));
});
