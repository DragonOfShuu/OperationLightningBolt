import { TestBed } from '@angular/core/testing';

import { AgentHolderService } from './agent-holder.service';

describe('AgentHolderService', () => {
  let service: AgentHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
