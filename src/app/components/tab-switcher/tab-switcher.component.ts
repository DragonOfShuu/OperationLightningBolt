import { Component, Input } from '@angular/core';

type Pages<T extends string> = { [key in T]?: Component }

@Component({
  selector: 'shuu-tab-switcher',
  standalone: true,
  imports: [],
  templateUrl: './tab-switcher.component.html',
  styleUrl: './tab-switcher.component.sass',
})
export class TabSwitcherComponent<T extends string> {
  @Input({ required: true }) pages: Pages<T> = {};
  @Input({ required: true }) page: T = '' as T;

  getPage() {
    return this.pages[this.page];
  }

  setPage(newPage: T) {
    this.page = newPage;
    // NEED TO CREATE A TWO WAY BINDING
    // WHEN WE SET THE PAGE TO NOTIFY
    // THE PARENT, AND GIVE HTE ABILITY
    // TO UPDATE THE SERVICE
  }
}
