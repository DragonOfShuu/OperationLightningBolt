import { Component, inject } from '@angular/core';
import { AgentHolderService } from '../agent-holder.service';

@Component({
  selector: 'shuu-select-page',
  standalone: true,
  imports: [],
  templateUrl: './select-page.component.html',
  styleUrl: './select-page.component.sass'
})
export class SelectPageComponent {
  private agentHolder = inject(AgentHolderService)
}
