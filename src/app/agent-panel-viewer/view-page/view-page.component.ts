import { Component, inject } from '@angular/core';
import { AgentHolderService } from '../agent-holder.service';
import { JsonPipe } from '@angular/common';
import { AgentObjectComponent } from './agent-object/agent-object.component';

@Component({
  selector: 'shuu-view-page',
  standalone: true,
  imports: [JsonPipe, AgentObjectComponent],
  templateUrl: './view-page.component.html',
  styleUrl: './view-page.component.sass'
})
export class ViewPageComponent {
  agentHolder = inject(AgentHolderService);
}
