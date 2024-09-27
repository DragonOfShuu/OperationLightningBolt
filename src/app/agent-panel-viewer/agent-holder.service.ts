import { inject, Injectable } from '@angular/core';
import { Agent } from './agent.type';
import { BrowserStorageService } from '../core-services/browser-storage.service';

@Injectable()
export class AgentHolderService {
  readonly STORAGE_KEY = 'agent-holder';
  browserLocalstorage = inject(BrowserStorageService);
  private agents;

  constructor() {
    const newData = this.browserLocalstorage.getData<Agent[]>(this.STORAGE_KEY);
    this.agents = newData ?? [];
  }

  addAgent(agent: Agent) {
    this.agents.push(agent);
    this.saveAgents(this.agents);
  }

  removeAgent(index: number): void;
  removeAgent(ref: Agent): void;
  removeAgent(data: Agent|number): void {
    let index = -1;
    if (typeof data === "number") {
      index = data;
    } else {
      index = this.agents.indexOf(data);
    }

    if (index===-1) throw new Error('Index does not exist when removing agent.');

    this.saveAgents(this.agents.splice(index, 1));
  }

  saveAgents(agentList: Agent[]) {
    this.browserLocalstorage.setData(this.STORAGE_KEY, agentList);
  }
}
