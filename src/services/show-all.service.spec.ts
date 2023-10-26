import { TestBed } from '@angular/core/testing';

import { ShowAllService } from './show-all.service';

describe('ShowAllService', () => {
  let service: ShowAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
