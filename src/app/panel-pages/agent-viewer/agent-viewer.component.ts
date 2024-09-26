import { Component, inject } from '@angular/core';
import { TabSwitcherComponent } from "../../components/tab-switcher/tab-switcher.component";
import { AgentPanelPagerService } from '../../services/agent-panel-pager.service';

@Component({
  selector: 'shuu-agent-viewer',
  standalone: true,
  imports: [TabSwitcherComponent],
  templateUrl: './agent-viewer.component.html',
  styleUrl: './agent-viewer.component.sass'
})
export class AgentViewerComponent {
  agentPagerService = inject(AgentPanelPagerService);

}
