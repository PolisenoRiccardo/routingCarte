import { TestBed } from '@angular/core/testing';

import { CerCartaService } from './cer-carta.service';

describe('CerCartaService', () => {
  let service: CerCartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerCartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
