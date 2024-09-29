import { Component, inject } from '@angular/core';
import { AgentHolderService } from '../agent-holder.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'shuu-view-page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.sass'
})
export class ViewPageComponent {
  agentHolder = inject(AgentHolderService);
}
