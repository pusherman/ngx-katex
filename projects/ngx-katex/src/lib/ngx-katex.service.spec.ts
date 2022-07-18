import { TestBed } from '@angular/core/testing';

import { NgxKatexService } from './ngx-katex.service';

describe('NgxKatexService', () => {
  let service: NgxKatexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKatexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
