import { Injectable } from '@angular/core';
import { PanelPageEnum } from '../panel-pages/panel-page.enum';

@Injectable({
  providedIn: 'root'
})
export class AgentPanelPagerService {
  panelPage: PanelPageEnum = PanelPageEnum.ADD;

  setPage(newPage: PanelPageEnum) {
    this.panelPage = newPage;
  }
}
