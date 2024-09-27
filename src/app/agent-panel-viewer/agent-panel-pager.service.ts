import { Injectable } from '@angular/core';
import { PanelPageEnum } from './panel-page.enum';
import { AddPageComponent } from './add-page/add-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { SelectPageComponent } from './select-page/select-page.component';

@Injectable({
  providedIn: 'root'
})
export class AgentPanelPagerService {
  page: PanelPageEnum = PanelPageEnum.ADD;
  pages: {[page in PanelPageEnum]: any} = {
    ADD: AddPageComponent,
    VIEW: ViewPageComponent,
    SELECT: SelectPageComponent,
  }

  setPage(newPage: PanelPageEnum) {
    this.page = newPage;
  }
}
