import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type Pages<T extends string> = { [key in T]?: Component }

@Component({
  selector: 'shuu-tab-switcher',
  standalone: true,
  imports: [NgComponentOutlet, TitleCasePipe],
  templateUrl: './tab-switcher.component.html',
  styleUrl: './tab-switcher.component.sass',
})
export class TabSwitcherComponent<T extends string> {
  @Input({ required: true }) pages: Pages<T> = {};
  @Input({ required: true }) page: T = '' as T;
  @Output() pageChange = new EventEmitter<T>();

  getPage(): any|null {
    const newPage = this.pages[this.page]
    console.log(`Getting page: ${newPage}`)
    return newPage??null;
  }

  setPage(newPage: T) {
    this.page = newPage;
    this.pageChange.emit(newPage);
  }

  getPagesIterable() {
    return Object.keys(this.pages) as T[];
  }
}
