import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LightningSvgComponent } from "./assets/lightning-svg/lightning-svg.component";
import { TabSwitcherComponent } from "./components/tab-switcher/tab-switcher.component";
import { AgentViewerComponent } from "./agent-panel-viewer/agent-viewer/agent-viewer.component";

@Component({
  selector: 'shuu-root',
  standalone: true,
  imports: [RouterOutlet, LightningSvgComponent, TabSwitcherComponent, AgentViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'OperationLightningBolt';
}
