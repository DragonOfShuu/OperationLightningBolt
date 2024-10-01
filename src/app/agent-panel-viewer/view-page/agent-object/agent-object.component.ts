import { Component, inject, Input } from '@angular/core';
import { Agentwid } from '../../agentwid.type';
import { NgClass } from '@angular/common';
import { GarbageCanSvgComponent } from '../../../assets/garbage-can-svg/garbage-can-svg.component';
import { AgentHolderService } from '../../agent-holder.service';

@Component({
  selector: 'shuu-agent-object',
  standalone: true,
  imports: [NgClass, GarbageCanSvgComponent],
  templateUrl: './agent-object.component.html',
  styleUrl: './agent-object.component.sass'
})
export class AgentObjectComponent {
  @Input({required: true}) agent: Agentwid = {id: '0', name: 'John Doe', quote: ''}

  readonly agentHolder = inject(AgentHolderService)

  protected expanded = false;

  deleteAgent() {
    this.agentHolder.removeAgent(this.agent)
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
