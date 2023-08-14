import { TestBed } from '@angular/core/testing';

import { ThirdpartyConnectionService } from './thirdparty-connection.service';

describe('ThirdpartyConnectionService', () => {
  let service: ThirdpartyConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdpartyConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
