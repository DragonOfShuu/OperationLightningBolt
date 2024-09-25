import { TestBed } from '@angular/core/testing';

import { PanelPagerService } from './panel-pager.service';

describe('PanelPagerService', () => {
  let service: PanelPagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelPagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
