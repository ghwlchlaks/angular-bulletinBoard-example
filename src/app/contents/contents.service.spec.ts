/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentsService } from './contents.service';

describe('Service: Contents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentsService]
    });
  });

  it('should ...', inject([ContentsService], (service: ContentsService) => {
    expect(service).toBeTruthy();
  }));
});
