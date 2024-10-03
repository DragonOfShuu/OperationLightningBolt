import { Component, inject } from '@angular/core';
import { AgentHolderService } from '../agent-holder.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    const newData = this.agentHolder.addAgentsForm.value;
    for (const item of Object.values(newData)) {
      if (item===undefined||item===null) throw new Error("Value was somehow empty for undefined.")
    }
    this.agentHolder.addAgent(this.agentHolder.addAgentsForm.value as Agent)
    this.agentHolder.addAgentsForm.reset();
  }
}
