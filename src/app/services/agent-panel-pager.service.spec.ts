import { TestBed } from '@angular/core/testing';

import { AgentPanelPagerService } from './agent-panel-pager.service';

describe('PanelPagerService', () => {
  let service: AgentPanelPagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentPanelPagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
