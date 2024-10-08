import { Component, inject } from '@angular/core';
import { AgentHolderService } from '../agent-holder.service';
import { Agentwid } from '../agentwid.type';

@Component({
  selector: 'shuu-select-page',
  standalone: true,
  imports: [],
  templateUrl: './select-page.component.html',
  styleUrl: './select-page.component.sass'
})
export class SelectPageComponent {
  private agentHolder = inject(AgentHolderService)
  selectedAgent: null|Agentwid = null;
  dialog: null|HTMLDialogElement = null;

  onClose(e: Event) {

  }

  selectAgent(dialog: HTMLDialogElement) {
    const agent = this.agentHolder.selectRandom();
    this.selectedAgent = agent;
    this.dialog = dialog;
    this.dialog.showModal();
  }
}
