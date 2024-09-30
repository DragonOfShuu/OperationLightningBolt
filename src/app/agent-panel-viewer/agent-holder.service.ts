import { inject, Injectable } from '@angular/core';
import { Agent } from './agent.type';
import { BrowserStorageService } from '../core-services/browser-storage.service';
import { Agentwid } from './agentwid.type';
import { AgentHolderData } from './agent-holder-data.type';

@Injectable()
export class AgentHolderService {
  readonly STORAGE_KEY = 'agent-holder';
  browserLocalstorage = inject(BrowserStorageService);
  private agentHolderData: AgentHolderData;

  constructor() {
    const newData = this.browserLocalstorage.getData<AgentHolderData>(this.STORAGE_KEY);
    this.agentHolderData = newData ?? { agents: [], currId: 0 };
  }

  addAgent(agent: Agent) {
    const newAgent: Agentwid = {...agent, id: this.agentHolderData.currId.toString() }
    this.saveAgents({
      agents: [...this.agentHolderData.agents, newAgent],
      currId: this.agentHolderData.currId+1
    });
  }

  removeAgent(index: number): void;
  removeAgent(ref: Agentwid): void;
  removeAgent(data: Agentwid|number): void {
    let index = -1;
    if (typeof data === "number") {
      index = data;
    } else {
      index = this.agentHolderData.agents.indexOf(data);
    }

    if (index===-1) throw new Error('Index does not exist when removing agent.');

    this.agentHolderData.agents.splice(index, 1)

    this.saveAgents({
      ...this.agentHolderData,
      agents: [...this.agentHolderData.agents],
    });
  }

  saveAgents(newAgentHolderData: AgentHolderData) {
    this.browserLocalstorage.setData(this.STORAGE_KEY, newAgentHolderData);
    this.agentHolderData = newAgentHolderData;
  }

  getAgents() {
    return this.agentHolderData.agents;
  }
}
