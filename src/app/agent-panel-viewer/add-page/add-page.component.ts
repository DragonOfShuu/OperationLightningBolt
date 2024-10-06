import { Component, inject } from '@angular/core';
import { AgentHolderService } from '../agent-holder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Agent } from '../agent.type';

@Component({
  selector: 'shuu-add-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.sass'
})
export class AddPageComponent {
  readonly agentHolder = inject(AgentHolderService);

  submitAgent() {
    const newAgent = this.agentHolder.addAgentsForm.value as Agent;
    this.agentHolder.addAgent(newAgent)
    this.agentHolder.addAgentsForm.reset();
  }
}
