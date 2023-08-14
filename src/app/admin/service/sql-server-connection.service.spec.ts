import { TestBed } from '@angular/core/testing';

import { SqlServerConnectionService } from './sql-server-connection.service';

describe('SqlServerConnectionService', () => {
  let service: SqlServerConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlServerConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
