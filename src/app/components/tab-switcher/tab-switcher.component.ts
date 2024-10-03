import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { Component, ComponentRef, inject, input, model, output } from '@angular/core';

type Pages<T extends string> = { [key in T]?: Component }

@Component({
  selector: 'shuu-tab-switcher',
  standalone: true,
  imports: [NgComponentOutlet, TitleCasePipe],
  templateUrl: './tab-switcher.component.html',
  styleUrl: './tab-switcher.component.sass',
})
export class TabSwitcherComponent<T extends string> {
  readonly pages = input.required<Pages<T>>();
  readonly page = model.required<T>();

  getPage(): any|null {
    const newPage = this.pages()[this.page()]
    return newPage??null;
  }

  setPage(newPage: T) {
    this.page.set(newPage)
  }

  getPagesIterable(): T[] {
    return Object.keys(this.pages()) as T[];
  }
}
